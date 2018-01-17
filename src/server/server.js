import express from 'express';
import dotenv from 'dotenv';
import winston from 'winston';
import consolidate from 'consolidate';
import path from 'path';
import Mailchimp from 'mailchimp-api-v3';
import bodyParser from 'body-parser';
import SlackBot from 'slackbots';
import crypto from 'crypto';

if ('production' !== process.env.NODE_ENV) {
    try {
        dotenv.config();
    } catch (err) {
        error('impossible to read file .env', err);
    }
}

// https://github.com/thorning/node-mailchimp
const mailchimp = new Mailchimp(process.env.MAILCHIMP_KEY);

winston.info('config', {early_adopters: process.env.MAILCHIMP_LIST_EARLY_ADOPTERS, newsletter: process.env.MAILCHIMP_LIST_NEWSLETTER});

let bot = null;
if (process.env.SLACK_BOT_TOKEN && process.env.SLACK_CHANNEL) {
    bot = new SlackBot({
        token: process.env.SLACK_BOT_TOKEN,
        name: process.env.HOST
    });

    bot.on('start', () => {
        winston.info('connected to slack');
    });
}

const app = express();

app.engine('html', consolidate.swig);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '../templates'));

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: true})); // support encoded bodies

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Techmind',
    url: process.env.HOST,
    preview: `${process.env.HOST}/img/preview.png`,
    preview_facebook: `${process.env.HOST}/img/preview-facebook.png`,
    preview_google_plus: `${process.env.HOST}/img/preview-google+.png`,
    preview_twitter: `${process.env.HOST}/img/preview-facebook.png`,
    description: 'Comprendre les nouvelles technologies qui nous entourent devient indispensable. Techmind vous propose des articles de qualité, critiques et documentés pour vous faire découvrir les derniers progrès technologiques, leurs usages et leurs conséquences sur notre société.',
  });
});

app.post('/mailchimp/add', (req, res) => {
  const hash = crypto.createHash('md5').update(req.body.email).digest("hex");

  // cf http://developer.mailchimp.com/documentation/mailchimp/reference/lists/members/#create-post_lists_list_id_members
  mailchimp.put(`/lists/${process.env.MAILCHIMP_LIST_EARLY_ADOPTERS}/members/${hash}`,
    {
      email_address: req.body.email,
      status : 'subscribed',
      merge_fields: {
        COMMENT: req.body.comment,
        FIRST_ARTI: req.body.first_article,
      }
    }, (data) => {
      if (req.body.newsletter) {
        mailchimp.put(`/lists/${process.env.MAILCHIMP_LIST_NEWSLETTER}/members/${hash}`,
          {
            email_address: req.body.email,
            status : 'subscribed'
          }, (data) => {
            if (null === data) {
              sendFeedback(req.body.email, req.body.comment, req.body.first_article, req.body.newsletter);
              res.send('ok');
            } else {
              winston.error(data);
            }
        });
      } else {
        if (null === data) {
          sendFeedback(req.body.email, req.body.comment, req.body.first_article, req.body.newsletter);
          res.send('ok');
        } else {
          winston.error(data);
        }
      }
    });
});

app.use(express.static(path.join(__dirname, '../../src/front')));
app.use(express.static(path.join(__dirname, '../../dist/front')));

app.listen(process.env.PORT, (err) => {
    if (err) {
        winston.error('import to start http server', {error: err});
    } else {
        winston.info(`listening server on port ${process.env.PORT}`);
    }
});

const sendFeedback = (email, comment, first_article, withNewsletter) => {
  let withNewsletterSentence = withNewsletter ? 'and to newletter ' : '';
  bot && bot.postMessageToChannel(process.env.SLACK_CHANNEL, `${email} subscribed to techmind early adopters ${withNewsletterSentence}with comment "${comment}" and chose the article "${first_article}".`);
};
