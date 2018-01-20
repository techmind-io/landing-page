$(document).ready(function () {
  /*
  particlesJS("techmind-background", {
    "particles": {
      "number": {
        "value": 20,
        "density": {
          "enable": true,
          "value_area": 500
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
    },
    "retina_detect": true
  });*/

  $('#welcome').height($(window).height());

  $(window).resize(function () {
    $('#welcome').height($(window).height());
  });

  const controller = new ScrollMagic.Controller();
  new ScrollMagic.Scene({offset: -200, triggerElement: '#technologies', duration: 400})
  .on("progress", function (e) {
    // console.log('progress', e.progress)
    $('#background').css('left', (100 - e.progress * 100) + '%');
  }).addTo(controller);

  new ScrollMagic.Scene({offset: -200, triggerElement: '#technologies', duration: 400})
  .on("progress", function (e) {
    // console.log('progress', e.progress)
    $('#technologies-left-content').css('right', (100 - e.progress * 100) + '%');
  }).addTo(controller);

  new ScrollMagic.Scene({offset: -400, triggerElement: '#techmind', duration: 400})
  .on("progress", function (e) {
    $('#techmind-center').css('top', 800 * (1 - e.progress));
  }).addTo(controller);

  new ScrollMagic.Scene({offset: -100, triggerElement: '#techmind', duration: 400})
  .on("progress", function (e) {
    $('#techmind-center').css('opacity', e.progress);
  }).addTo(controller);

  new ScrollMagic.Scene({offset: -200, triggerElement: '#accessible', duration: 400})
  .on("progress", function (e) {
    $('#accessible-right-content').css('left', (100 - e.progress * 100) + '%');
  }).addTo(controller);

  new ScrollMagic.Scene({offset: -200, triggerElement: '#reliable', duration: 400})
  .on("progress", function (e) {
    $('#reliable-left-content').css('right', (100 - e.progress * 100) + '%');
  }).addTo(controller);

  /*

  new ScrollMagic.Scene({offset: 0, triggerElement: '#important', duration: 200})
  .on("progress", function (e) {
    $('#important-' + 1).css('opacity', e.progress);
  }).addTo(controller);

  new ScrollMagic.Scene({offset: 80, triggerElement: '#important', duration: 200})
  .on("progress", function (e) {
    $('#important-' + 2).css('opacity', e.progress);
  }).addTo(controller);

  new ScrollMagic.Scene({offset: 160, triggerElement: '#important', duration: 200})
  .on("progress", function (e) {
    $('#important-' + 3).css('opacity', e.progress);
  }).addTo(controller);

  new ScrollMagic.Scene({offset: 240, triggerElement: '#important', duration: 200})
  .on("progress", function (e) {
    $('#important-' + 4).css('opacity', e.progress);
  }).addTo(controller);

  */

  if ($(window).width() > 1000) {










  /*
    const sqrt3 = 1.73;
    const width = 100;
    const margin = 100;
    const height = width * sqrt3;
    const draw = SVG('themes-svg').size(2 * (width + margin), height + 2 * margin);

    //const triangle = draw.polygon([[width, height / 2], [width, height / 2], [width, height / 2]]).fill('none').stroke({width: 4, color: 'white'});
    draw.polygon([[width + margin, margin], [margin + 2 * width, margin + height], [margin, margin + height]]).fill('none').stroke({width: 25, color: 'white'});
    //draw.animate(2000).polyline([width + margin, margin, margin + 2 * width, margin + height, margin, margin + height].join(', '))
  */



    if (SVG.supported) {
      // accessible svg

      /*(function () {
        const draw = SVG('accessible-svg').size(120, 300);
        // draw.path('M0 0 H50 A20 20 0 1 0 100 50 v25 C50 125 0 85 0 85 z').stroke({width: 2, color: 'white'})

        const circle = draw.circle(60).center(60, 60).stroke({width: 2, color: 'white'}).fill('rgba(0, 0, 0, 0)')
        const circle2 = draw.circle(60).center(60, 160).stroke({width: 2, color: 'white'}).fill('rgba(0, 0, 0, 0)')
        const circle3 = draw.circle(60).center(60, 260).stroke({width: 2, color: 'white', linecap: 'round', dasharray:'1, 5'}).fill('rgba(0, 0, 0, 0)')
        const line = draw.line(60, 90, 60, 130).stroke({width: 2, color: 'white'})
        const line2 = draw.line(60, 190, 60, 230).stroke({width: 2, color: 'white', linecap: 'round', dasharray:'1, 5'})
        // draw.path('M5 20 l215 0').stroke({width: 2, color: 'white'})


        const text = draw.text('1').center(60, 60).font({fill: '#fff', family: 'Didact Gothic' })
        const text2 = draw.text('2').center(60, 160).font({fill: '#fff', family: 'Didact Gothic' })
        const text3 = draw.text('3').center(60, 260).font({fill: '#fff', family: 'Didact Gothic' })


      }());*/

      (function () {
        const draw = SVG('welcome-background');
        const group = draw.group();
        const laptopContent = draw.image('./img/eye5.png', '100%', '100%').move(0, 0);
        group.add(laptopContent);

        const radial = draw.gradient('radial', function (stop) {
          stop.at(0.25, '#fff');
          stop.at(0.5, '#000');
        }).radius(1);
        const circle = draw.circle(0).center(1100, -200).fill({color: radial});
        const mask = draw.mask().add(circle);
        group.maskWith(mask);


        new ScrollMagic.Scene({offset: 0, duration: 1400})
        .setPin("#welcome") // pins the element for the the scene's duration
        .on("progress", function (e) {
          let newRadius = 1250 * e.progress;
          if (newRadius > 950) {
            newRadius = 950;
          }
          circle.radius(/* 950 */ newRadius);

          if (e.progress > 0.8) {
            console.log('progress', e.progress);
            $('#welcome-title').css('top', 900 * (5 - 5 * e.progress) + 90);
          }
        }).addTo(controller);

      }());

    }


    // scroll only on large screen
    if ($('html').scrollTop() === 0) {
      console.log('need to scroll');
      $('html, body').stop().animate({
        'scrollTop': 1400
      }, 900, 'swing', function () {
        // window.location.hash = target;
      });
    }


  }


  if (SVG.supported) {
    // accessible svg
    (function () {
      const draw = SVG('accessible-svg').size(120, 300);
      // draw.path('M0 0 H50 A20 20 0 1 0 100 50 v25 C50 125 0 85 0 85 z').stroke({width: 2, color: 'white'})

      draw.circle(60).center(60, 60).stroke({width: 2, color: 'white'}).fill('rgba(0, 0, 0, 0)');
      draw.circle(60).center(60, 160).stroke({width: 2, color: 'white'}).fill('rgba(0, 0, 0, 0)');
      draw.circle(60).center(60, 260).stroke({width: 2, color: 'white', linecap: 'round', dasharray:'1, 5'}).fill('rgba(0, 0, 0, 0)');
      draw.line(60, 90, 60, 130).stroke({width: 2, color: 'white'});
      draw.line(60, 190, 60, 230).stroke({width: 2, color: 'white', linecap: 'round', dasharray:'1, 5'});

      draw.text('1').center(60, 60).font({fill: '#fff', family: 'Didact Gothic'});
      draw.text('2').center(60, 160).font({fill: '#fff', family: 'Didact Gothic'});
      draw.text('3').center(60, 260).font({fill: '#fff', family: 'Didact Gothic'});
    }());

    (function () {

      const draw = SVG('reliable-svg').size(152, 152);

      // draw.rect(210, 300).move(50, 0).stroke({width: 2, color: 'white'}).fill('rgba(0, 0, 0, 0)');
      draw.path('M25 85 l30 30 l70 -70').stroke({width: 2, color: 'white'}).fill('rgba(0, 0, 0, 0)');
      draw.circle(150).center(76, 76).stroke({width: 2, color: 'white'}).fill('rgba(0, 0, 0, 0)');
    }());
  }




  $('#subscribe').click(function () {
    $('html, body').stop().animate({
    'scrollTop': $('#articles').offset().top
      }, 2000, 'swing', function () {
    });
  });

  function activate (target) {
      $('.articles-item').removeClass('activated');
      $('.articles-item').addClass('hiding');
      target.removeClass('hiding');
      $('#articles-form').addClass('activated');


      setTimeout(function () {
        // $('#articles-subscribe').addClass('fixed');
        $('.articles-item').addClass('hide');
        $('#articles-form').addClass('show');
        target.removeClass('hide');
      }, 500);

      target.addClass('activated');
  }


  var articleSelected = null;

  $('#article-1').click(function () {
    articleSelected = 'Bitcoin';
    activate($(this));
  });

  $('#article-2').click(function () {
    articleSelected = 'Paiement sans contact';
    activate($(this));
  });

  $('#article-3').click(function () {
    articleSelected = 'Machine learning';
    activate($(this));
  });

  $('#articles-cancel').click(function () {
    // $('html, body').stop().scrollTop($('#articles-subscribe').offset().top);
    // $('#articles-subscribe').removeClass('activated');
    // $('#articles-subscribe').removeClass('fixed');
    $('.articles-item').removeClass('activated');
    $('#articles-form').removeClass('show');

    $('.articles-item').removeClass('hide');
    setTimeout(function () {
      $('.articles-item').removeClass('hiding');
      $('#articles-form').removeClass('activated');
    }, 500);
  });

  $('#checkbox').click(function () {
    $('#checkbox-box').toggleClass('activated');
  });

  $('#subscribe-newsletter').click(function (event) {
    event.preventDefault();
    event.stopPropagation();

    const email = $('#email').val();
    if (!isEmail(email)) {
      console.log('is not email')
      $('#subscribe-newsletter').addClass('animated shake');
      $('#email').addClass('wrong');

      setTimeout(function () {
        $('#subscribe-newsletter').removeClass('animated shake');
      }, 1000);
      return;
    }

    $.post('/mailchimp/add', {email: $('#email').val(), comment: $('#comment').val(), first_article: articleSelected, newsletter: $('#checkbox-box').hasClass('activated')}, function (data) {
      $('#articles-list').addClass('hiding');
      setTimeout(function () {
        $('#articles-list').addClass('hide');
        $('#articles-feedback').addClass('show-first');

        setTimeout(function () {
          $('#articles-feedback').addClass('show');
        }, 50);
      }, 200);

      $('#articles-help').slideUp();




      console.log('data', data);
    });

  });

  function isEmail (email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  $('#email').bind('change keydown', function (event) {
      const email = $('#email').val();
      if (isEmail(email)) {
        $('#email').removeClass('wrong');
      } /* else {
        $('#email').addClass('wrong');
      } */
  });

  $('#continue').click(function () {
    $('html, body').stop().animate({
    'scrollTop': $('#technologies').offset().top
      }, 2000, 'swing', function () {
    });
  });

  setTimeout(function () {
    $('#continue').removeClass('welcome-bottom-center-hide');
  }, 1500);

  $('#articles-help-title').click(function () {
    $('#articles-help-link-list').slideDown();
    $('#articles-help-title').slideUp();
  });

  $('#articles-help-link-list').slideUp(0);

  $('#contact-me').click(function () {
    const first = 'thibault.';
    const last = 'friedrich';
    window.location.href = 'mailto:' + first + last + '@gmail.com';
  });

});
