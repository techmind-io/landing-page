import express from 'express'
import dotenv from 'dotenv'
import winston from 'winston'
import consolidate from 'consolidate'
import path from 'path'

if ('production' !== process.env.NODE_ENV) {
    try {
        dotenv.config();
    } catch (err) {
        error('impossible to read file .env', err);
    }
}


const app = express()

app.engine('html', consolidate.swig)
app.set('view engine', 'html')
app.set('views', path.join(__dirname, '../templates'))

app.get('/', function(req, res){
  res.render('index', {
    title: 'Techmind',
    url: process.env.HOST,
    preview: '',
    description: 'description',
  });
});

app.use(express.static(path.join(__dirname, '../../src/front')));
app.use(express.static(path.join(__dirname, '../../dist/front')));

app.listen(process.env.PORT, (err) => {
    if (err) {
        winston.error('import to start http server', {error: err})
    } else {
        winston.info(`listening server on port ${process.env.PORT}`)
    }
});
