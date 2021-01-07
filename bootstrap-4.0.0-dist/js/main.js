/**
*
* -----------------------------------------------------------------------------
*
* Template : Edulearn | Responsive Education HTML5 Template 
* Author : rs-theme
* Author URI : http://www.rstheme.com/
*
* -----------------------------------------------------------------------------
*
**/

(function($) {
    "use strict";

    // sticky menu
    var header = $('.menu-sticky');
    var win = $(window);
    win.on('scroll', function() {
       var scroll = win.scrollTop();
       if (scroll < 300) {
           header.removeClass("sticky");
       } else {
           header.addClass("sticky");
       }
    });
	
    // Latest News
	$('.latest-news-slider').slick({
		slidesToShow: 1,
		// vertical: true,
		// verticalSwiping: true,
		slidesToScroll: 1,
		arrows: true,
		fade: false,
		asNavFor: '.latest-news-nav'
	});

	$('.latest-news-nav').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.latest-news-slider',
		dots: false,
		centerMode: false,
		centerPadding: '0',
		focusOnSelect: true
	});
	
	
	//window load
	$(window).on( 'load', function() {
		//rs menu
		if($(window).width() < 992) {
		  $('.rs-menu').css('height', '0');
		  $('.rs-menu').css('opacity', '0');
		  $('.rs-menu-toggle').on( 'click', function(){
			 $('.rs-menu').css('opacity', '1');
		 });
		}
	})
	
	//Slider js 
	/*-------------------------------------
	       Home page Slider
	       -------------------------------------*/	  
	      // Declare Carousel jquery object
	      var owl = $('#home-slider');

	      // Carousel initialization
	      owl.owlCarousel({
	          loop:true,
	          margin:0,
	          navSpeed:800,
	          nav:true,
	          navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
	          items:1,
	          autoplay:true,
	          transitionStyle : "fade",
	      });

	      // add animate.css class(es) to the elements to be animated
	      function setAnimation ( _elem, _InOut ) {
	        // Store all animationend event name in a string.
	        // cf animate.css documentation
	        var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

	        _elem.each ( function () {
	          var $elem = $(this);
	          var $animationType = 'animated ' + $elem.data( 'animation-' + _InOut );

	          $elem.addClass($animationType).one(animationEndEvent, function () {
	            $elem.removeClass($animationType); // remove animate.css Class at the end of the animations
	          });
	        });
	      }

	    // Fired before current slide change
	      owl.on('change.owl.carousel', function(event) {
	          var $currentItem = $('.owl-item', owl).eq(event.item.index);
	          var $elemsToanim = $currentItem.find("[data-animation-out]");
	          setAnimation ($elemsToanim, 'out');
	      });

	    // Fired after current slide has been changed
	      owl.on('changed.owl.carousel', function(event) {

	          var $currentItem = $('.owl-item', owl).eq(event.item.index);
	          var $elemsToanim = $currentItem.find("[data-animation-in]");
	          setAnimation ($elemsToanim, 'in');
	      });
	
	/*-------------------------------------
    OwlCarousel
    -------------------------------------*/
	$('.rs-carousel').each(function() {
		var owlCarousel = $(this),
		loop = owlCarousel.data('loop'),
		items = owlCarousel.data('items'),
		margin = owlCarousel.data('margin'),
		stagePadding = owlCarousel.data('stage-padding'),
		autoplay = owlCarousel.data('autoplay'),
		autoplayTimeout = owlCarousel.data('autoplay-timeout'),
		smartSpeed = owlCarousel.data('smart-speed'),
		dots = owlCarousel.data('dots'),
		nav = owlCarousel.data('nav'),
		navSpeed = owlCarousel.data('nav-speed'),
		xsDevice = owlCarousel.data('mobile-device'),
		xsDeviceNav = owlCarousel.data('mobile-device-nav'),
		xsDeviceDots = owlCarousel.data('mobile-device-dots'),
		smDevice = owlCarousel.data('ipad-device'),
		smDeviceNav = owlCarousel.data('ipad-device-nav'),
		smDeviceDots = owlCarousel.data('ipad-device-dots'),
		mdDevice = owlCarousel.data('md-device'),
		mdDeviceNav = owlCarousel.data('md-device-nav'),
		mdDeviceDots = owlCarousel.data('md-device-dots');

		owlCarousel.owlCarousel({
			loop: (loop ? true : false),
			items: (items ? items : 4),
			lazyLoad: true,
			margin: (margin ? margin : 0),
			//stagePadding: (stagePadding ? stagePadding : 0),
			autoplay: (autoplay ? true : false),
			autoplayTimeout: (autoplayTimeout ? autoplayTimeout : 1000),
			smartSpeed: (smartSpeed ? smartSpeed : 250),
			dots: (dots ? true : false),
			nav: (nav ? true : false),
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			navSpeed: (navSpeed ? true : false),
			responsiveClass: true,
			responsive: {
				0: {
					items: (xsDevice ? xsDevice : 1),
					nav: (xsDeviceNav ? true : false),
					dots: (xsDeviceDots ? true : false)
				},
				768: {
					items: (smDevice ? smDevice : 3),
					nav: (smDeviceNav ? true : false),
					dots: (smDeviceDots ? true : false)
				},
				992: {
					items: (mdDevice ? mdDevice : 4),
					nav: (mdDeviceNav ? true : false),
					dots: (mdDeviceDots ? true : false)
				}
			}
		});

	});


	 
	// video 
    if ($('.player').length) {
        $(".player").YTPlayer();
    }
    
    //about tabs
    $('.collapse.show').prev('.card-header').addClass('active');
    $('#accordion, #bs-collapse, #accordion1')
        .on('show.bs.collapse', function (a) {
            $(a.target).prev('.card-header').addClass('active');
        })
        .on('hide.bs.collapse', function (a) {
            $(a.target).prev('.card-header').removeClass('active');
        });

    // wow init
    new WOW().init();
    
    // image loaded portfolio init
	var gridfilter = $('.grid');
		if(gridfilter.length){
		$('.grid').imagesLoaded(function() {
			$('.gridFilter').on('click', 'button', function() {
				var filterValue = $(this).attr('data-filter');
				$grid.isotope({
					filter: filterValue
				});
			});
			var $grid = $('.grid').isotope({
				itemSelector: '.grid-item',
				percentPosition: true,
				masonry: {
					columnWidth: '.grid-item',
				}
			});
		});
	}	
        
    // project Filter
    if ($('.gridFilter button').length) {
		var projectfiler = $('.gridFilter button');
			if(projectfiler.length){
			$('.gridFilter button').on('click', function(event) {
				$(this).siblings('.active').removeClass('active');
				$(this).addClass('active');
				event.preventDefault();
			});
		}
	}

    // image popup
	var imaggepoppup = $('.image-popup');
	if(imaggepoppup.length){
		$('.image-popup').magnificPopup({
			type: 'image',
			callbacks: {
				beforeOpen: function() {
				   this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure animated zoomInDown');
				}
			},
			gallery: {
				enabled: true
			}
		});
	}
    
	// video popup
	var popupyoutube = $('.popup-youtube');
	if(popupyoutube.length){
		$('.popup-youtube').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false								
		});	
	}
	
    
     /*----------------------------
    single-productjs active
    ------------------------------ */
	var singleproduct = $('.single-product');
	if(singleproduct.length){
		$('.single-product').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.single-product-nav'
		});
	}
	var singleproductnav = $('.single-product-nav');
	if(singleproductnav.length){
		$('.single-product-nav').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '.single-product',
			dots: false,
			focusOnSelect: true,
			centerMode:true,
		});
	}

	/*-------------------------------------
	Preloder Js here
	---------------------------------------*/
	//preloader
	$(window).on( 'load', function() {
		$(".book_preload").delay(2000).fadeOut(200);
		$(".book").on('click', function() {
		$(".book_preload").fadeOut(200);
		})
	})
		
    // Counter Up
    if($('.counter-number').length){	
		$('.counter-number').counterUp({
			delay: 20,
			time: 1500
		});
	}
    // scrollTop init
    var totop = $('#scrollUp'); 
    if(totop.length){	
		win.on('scroll', function() {
			if (win.scrollTop() > 150) {
				totop.fadeIn();
			} else {
				totop.fadeOut();
			}
		});
		totop.on('click', function() {
			$("html,body").animate({
				scrollTop: 0
			}, 500)
		});
	}
    
    // Google Map
    if ($('#googleMap').length) {
        var initialize = function() {
            var mapOptions = {
                zoom: 10,
                scrollwheel: false,
                center: new google.maps.LatLng(40.837936, -73.412551),
                styles: [{
                    stylers: [{
                        saturation: -100
                    }]
                }]
            };
            var map = new google.maps.Map(document.getElementById("googleMap"),
                mapOptions);
            var marker = new google.maps.Marker({
                position: map.getCenter(),
                animation: google.maps.Animation.BOUNCE,
                icon: 'images/map-marker.png',
                map: map
            });
        }
        // Add the map initialize function to the window load function
        google.maps.event.addDomListener(window, "load", initialize);
    }
    
    /* MENU JS */
	var togglebtn = $('.toggle-btn');
	if(togglebtn.length){
		$(".toggle-btn").on("click", function () {
			$(this).toggleClass("active");
			$("body").toggleClass("hidden-menu");
		});
	}
    
	//canvas menu
	var navexpander = $('#nav-expander');
	if(navexpander.length){
		$('#nav-expander').on('click',function(e){
			e.preventDefault();
			$('body').toggleClass('nav-expanded');
		});
	}
	var navclose = $('#nav-close');
	if(navclose.length){
		$('#nav-close').on('click',function(e){
			e.preventDefault();
			$('body').removeClass('nav-expanded');
		});
	}
	
	//canvus menu
	var sidebarnavmenu = $('.sidebarnav_menu');
	if(sidebarnavmenu.length){
		$( ".sidebarnav_menu li.menu-item-has-children" ).on('click', function() {
		  $(this).children( "ul" ).slideToggle( "slow", function() {
		  });
		});
	}
	

})(jQuery);