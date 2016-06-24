
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
    $('<img src="images/cover.jpg" id="mobile-cover">').appendTo('.background-wrap');         
    } else {
    $('<video src="videos/video.mp4" id="video-bg-elem" autoplay loop muted></video>').appendTo('.background-wrap');    
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
  // Owl carousel
  $('.owl-partners').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }
  })

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


