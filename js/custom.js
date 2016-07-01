
$(window).scroll(function() {
    if ($(document).scrollTop() > 150) {
        $('.navbar').addClass('navbar-shrink');
    }
    else {
        $('.navbar').removeClass('navbar-shrink');
    }
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


/* ========================================================================= */
  /*  Logo changes depending on screen size
  /* ========================================================================= */
  var width = $(window).width();{

    if (width <= 769) {
    $('<img src="images/backgrounds/home-bg.jpg" id="mobile-cover">').appendTo('.background-wrap');
    $('<img src="images/backgrounds/services-bg.jpg" id="mobile-cover">').appendTo('.background-wrap-serv'); 
    $('<img src="images/backgrounds/specials-bg-4th.jpg" id="mobile-cover">').appendTo('.background-wrap-special');  
    $('<img src="images/backgrounds/faqs-bg.jpg" id="mobile-cover">').appendTo('.background-wrap-faqs');
    $('<img src="images/backgrounds/photos-bg.jpg" id="mobile-cover">').appendTo('.background-wrap-photos');         
    } else {
    $('<video src="videos/home-vd.mp4" id="video-bg-elem" autoplay loop muted></video>').appendTo('.background-wrap');
    $('<video src="videos/service-vd.mp4" id="video-bg-elem" autoplay loop muted></video>').appendTo('.background-wrap-serv');
    $('<video src="videos/special-vd-4th.mp4" id="video-bg-elem" autoplay loop muted></video>').appendTo('.background-wrap-special');    
    $('<video src="videos/faqs-vd.mp4" id="video-bg-elem" autoplay loop muted></video>').appendTo('.background-wrap-faqs');
    $('<video src="videos/photos-vd.mp4" id="video-bg-elem" autoplay loop muted></video>').appendTo('.background-wrap-photos'); 
  }
  }
  
/* =========================================================================== */
  /*  Burger navigation
  /* =========================================================================== */
  $('.navbar-toggle').click(function() {
      if (
        $('.navbar-toggle').hasClass('icon-bar-anim')) {
          $('.navbar-toggle').removeClass('icon-bar-anim');
        // $('.navbar-inverse').css("height", "");
      } else {
          $('.navbar-toggle').addClass('icon-bar-anim');
          // $('.navbar-inverse').css("height", "100%");
      }
  });

  /* =========================================================================== */
  /*  screen height
  /* =========================================================================== */
  $(".screen-height").height($(window).height());

    $(window).resize(function(){
      $(".screen-height").height($(window).height());
    });

  /* =========================================================================== */
  /*  Testimonial slider
  /* =========================================================================== */
    $('.testimonials-slider').bxSlider({
       slideWidth: 800,
       minSlides: 1,
       maxSlides: 1,
       slideMargin: 32,
       auto: true,
       autoControls: true
     });

  /* ==============================================================================
  /* Owl carousel
  /* =============================================================================== */
  $('.owl-portfolio').owlCarousel({

      loop:true,
      margin:10,
      nav:true,
      navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
            ],
      dots:false,
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  })

  // hide #back-top first
  $("#back-top").hide();

  // fade in #back-top

  $(window).scroll(function () {
  	if ($(this).scrollTop() > 100) {
  		$('#back-top').fadeIn();
  	} else {
  		$('#back-top').fadeOut();
  	}
  });

  // scroll body to 0px on click
  $('#back-top a').on("click", function(){
  	$('body,html').animate({
  		scrollTop: 0
  	}, 800);
  	return false;
  });

  var map;
        function initMap() {
          map = new google.maps.Map(document.getElementById('map-canvas'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8
          });
        }
/* ---------------------------------------------- /*
     * E-mail validation
    /* ---------------------------------------------- */

    function isValidEmailAddress(emailAddress) {
      var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
      return pattern.test(emailAddress);
    };

    /* ---------------------------------------------- /*
     * Contact form ajax
    /* ---------------------------------------------- */

    $('#contact-form').submit(function(e) {

      e.preventDefault();

      var c_name = $('#c_name').val();
      var c_email = $('#c_email').val();
      var c_phone = $('#c_phone').val();
      var c_message = $('#c_message ').val();
      var response = $('#contact-form .ajax-response');
      var c_therapist = $('#therapist option:selected').text();
      
      var formData = {
        'name'       : c_name,
        'email'      : c_email,
        'phone'      : c_phone,
        'message'    : c_message,
        'therapist'  : c_therapist
      };

      if (( c_name== '' || c_email == '' || c_phone == '' || c_message == '' || c_therapist == '' || c_therapist == 'Choose A Therapist') || (!isValidEmailAddress(c_email) )) {
        response.fadeIn(500);
        response.html('<i class="fa fa-warning"></i> Please fill out all fields above and try again.');
      }

      else {
           $.ajax({
              type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
              url         : 'php/contact.php', // the url where we want to POST
              data        : formData, // our data object
              dataType    : 'json', // what type of data do we expect back from the server
              encode      : true,
              success   : function(res){
                      var ret = $.parseJSON(JSON.stringify(res));
                      response.html(ret.message).fadeIn(500);
              }
            });
        }           
              return false;
      });

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$(function() {    
    $('.stats-bar').appear();
    $('.stats-bar').on('appear', function() {
    var fx = function fx() {
    $(".stat-number").each(function (i, el) {
        var data = parseInt(this.dataset.n, 10);
        var props = {
            "from": {
                "count": 0
            },
                "to": {
                "count": data
            }
        };
        $(props.from).animate(props.to, {
            duration: 1000 * 1,
            step: function (now, fx) {
                $(el).text(Math.ceil(now));
            },
            complete:function() {
                if (el.dataset.sym !== undefined) {
                  el.textContent = el.textContent.concat(el.dataset.sym)
                }
            }
        });
    });
    };

    
    var reset = function reset() {
        console.log($(this).scrollTop())
        if ($(this).scrollTop() > 90) {
            $(this).off("scroll");
          fx()
        }
    };

    
    $(window).on("scroll", reset);



});


    });

var speed = 'slow';

$('html, body').hide();

$(document).ready(function() {
    $('html, body').fadeIn(speed, function() {
        $('a[href], button[href]').click(function(event) {
            var url = $(this).attr('href');
            if (url.indexOf('#') == 0 || url.indexOf('javascript:') == 0) return;
            event.preventDefault();
            $('html, body').fadeOut(speed, function() {
                window.location = url;
            });
        });
    });
});