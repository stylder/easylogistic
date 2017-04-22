/*
 * Promo Corporate Marketing HTML Template
 * Copyright 2016 8Guild.com
 * Theme Custom Scripts
 *
    ╔══╗╔═══╗╔╗╔╗╔══╗╔╗──╔══╗
  	║╔╗║║╔══╝║║║║╚╗╔╝║║──║╔╗╚╗
  	║╚╝║║║╔═╗║║║║─║║─║║──║║╚╗║
  	║╔╗║║║╚╗║║║║║─║║─║║──║║─║║
  	║╚╝║║╚═╝║║╚╝║╔╝╚╗║╚═╗║╚═╝║
  	╚══╝╚═══╝╚══╝╚══╝╚══╝╚═══╝
*/

jQuery(document).ready(function($) {
	'use strict';

	//Disable default link behavior for dummy links that have href='#'
	var $emptyLink = $('a[href=#]');
	$emptyLink.on('click', function(e){
		e.preventDefault();
	});


	// Stuck navbar on scroll
	var navbarSticky = $('.navbar-sticky');
	var mainNav = $('.navbar-sticky .main-navigation');
	var mainNavH = mainNav.height();

	if($(navbarSticky).length) {
		mainNav.wrap('<div class="sticky-wrap" />');
		$('.sticky-wrap').height(mainNavH);

		$(navbarSticky).waypoint({
	    handler: function() {
	      $(mainNav).toggleClass('stuck');
	    },
	    offset: '-300'
	  })

	  $(navbarSticky).waypoint({
	    handler: function() {
	      $(mainNav).toggleClass('stuck-animation')
	    },
	    offset: '-400'
	  })
	}


	// Scroll Spy For Navigation
	$('.scrollspy').scrollSpy();


	// Waves Effect (on Buttons)
	if($('.waves-effect').length > 0) {
		Waves.displayEffect( { duration: 600 } );
	}


	// Progress Bars on Scroll Animation
	function pbOnScrollAnimation( items, trigger ) {
	  items.each( function() {
	    var pbElement = $(this);
	    var curVal = parseInt(pbElement.find('.progress-bar').data('valuenow'), 10);
	    var  curValRevesed = (100 - curVal);
	    var pbTrigger = ( trigger ) ? trigger : pbElement;
	    var units = pbElement.parents('.progress-container').find('.units');

	 		units.append(curVal + '%');

	    pbTrigger.waypoint(function() {
	      	pbElement.find('.progress-bar').css({'width': curValRevesed + '%'});
	    },{
	        offset: '90%'
	    });
	  });
	}
	pbOnScrollAnimation( $('.progress-animated') );


	// Counters (Animated Digits)
	function counterOnScrollAnimation( items, trigger ) {
	  items.each( function() {
	    var counterElement = $(this),
	        decimals = $(this).data('decimals'),
	        duration = $(this).data('duration');

	    var counterTrigger = ( trigger ) ? trigger : counterElement;

	    counterTrigger.waypoint(function(direction) {
				  	if(direction == 'down') {
			      	counterElement.find('.digits').spincrement({
									from: 0.0,
									decimalPlaces: decimals,
									duration: duration
							});
				  	} else {
				  		this.destroy();
				  	}
	    },{
	        offset: '95%'
	    });
	  });
	}
	counterOnScrollAnimation( $('.counter') );


	// Tooltips
	var $tooltip = $('[data-toggle="tooltip"]');
	if ( $tooltip.length > 0 ) {
		$tooltip.tooltip();
	}


	// Search form expand (Topbar)
	var $searchToggle = $('.search-btn > i, .toolbar');
	$searchToggle.on('click', function(){
		$(this).parent().find('.search-box').addClass('open');
	});
	$('.search-btn').on('click', function(e) {
    e.stopPropagation();
	});
	$(document).on('click', function(e) {
		$('.search-box').removeClass('open');
	});


	// Animated Scroll to Top Button
	var $scrollTop = $('.scroll-to-top-btn');
	if ($scrollTop.length > 0) {
		$(window).on('scroll', function(){
	    if ($(window).scrollTop() > 600) {
	      $scrollTop.addClass('visible');
	    } else {
	      $scrollTop.removeClass('visible');
	    }
		});
		$scrollTop.on('click', function(e){
			e.preventDefault();
			$('html').velocity("scroll", { offset: 0, duration: 1000, easing:'easeOutExpo', mobileHA: false });
		});
	};


	// Smooth scroll to element
	var $scrollTo = $('.scroll-to');
	$scrollTo.on('click', function(event){
		var $elemOffsetTop = $(this).data('offset-top') || 150;

		$('html').velocity("scroll", { offset:$(this.hash).offset().top-$elemOffsetTop, duration: 1000, mobileHA: false});
		event.preventDefault();
	});


	// Toggle Mobile Navigation
	var $navToggle = $('.nav-toggle', '.navbar');
	$navToggle.on('click', function(){
		$(this).toggleClass('active').parents('.navbar').find('.main-navigation').toggleClass('expanded');
		$('.main-navigation').find('.expanded').removeClass('expanded');
		$('.main-navigation').find('.active').removeClass('active');
	});


	// Mobile Submenu
	var $hasSubmenu = $('.menu-item-has-children > a');
	$hasSubmenu.on('click', function(){
		$hasSubmenu.parent().removeClass('active').find('.sub-menu').removeClass('expanded');
		$(this).parent().toggleClass('active').find('.sub-menu').toggleClass('expanded');
	});


	// Custom Checkboxes and Radios
	if($('input[type=checkbox], input[type=radio]').length) {
		$('input').iCheck();
	}


	// Toggleable Switch component
	var $sWitch = $('.switch');
	$sWitch.on('click', function(){

	  var clicks = $(this).data('clicks'),
	  		inputVal = $(this).find('input').attr('value');

		if (clicks && inputVal == 'off') {
			$(this).find('input').attr('value', 'on');
			$(this).addClass('on');
		} else if (clicks && inputVal == 'on') {
			$(this).find('input').attr('value', 'off');
			$(this).removeClass('on');
		} else if (!clicks && inputVal == 'off') {
			$(this).find('input').attr('value', 'on');
			$(this).addClass('on');
		} else if (!clicks && inputVal == 'on') {
			$(this).find('input').attr('value', 'off');
			$(this).removeClass('on');
		}

		$(this).data("clicks", !clicks);

	});


	// Logo Carousel
	var $logoCarousel = $( '.logo-carousel .inner' );
	if ( $logoCarousel.length > 0 ) {
		$logoCarousel.each( function () {

			var dataLoop 	 = $( this ).parent().data( 'loop' ),
					autoPlay = $( this ).parent().data( 'autoplay' ),
					timeOut = $( this ).parent().data( 'interval' ),
					nav = $( this ).parent().data( 'nav' );

			$( this ).owlCarousel( {
				loop: dataLoop,
				margin: 20,
				nav: nav,
				dots: false,
				autoplay: autoPlay,
				autoplayTimeout: timeOut,
				responsiveClass: true,
				navText: [ , ],
				responsive: {
					0: { items: 2 },
					480: { items: 3 },
					700: { items: 4 },
					1000: { items: 5 },
					1200: { items: 6 },
				}
			} );
		} );
	}


	// Comments Carousel
	var $commentsCarousel = $( '.comments-carousel .inner' );
	if ( $commentsCarousel.length > 0 ) {
		$commentsCarousel.each( function () {

			var dataLoop 	 = $( this ).parent().data( 'loop' ),
					autoPlay = $( this ).parent().data( 'autoplay' ),
					items = $( this ).parent().data( 'items' ),
					timeOut = $( this ).parent().data( 'interval' ),
					nav = $( this ).parent().data( 'nav' );

			$( this ).owlCarousel( {
				loop: dataLoop,
				margin: 20,
				nav: nav,
				dots: false,
				autoplay: autoPlay,
				autoplayTimeout: timeOut,
				responsiveClass: true,
				navText: [ , ],
				responsive: {
					0: { items: 1 },
					600: { items: 2 },
					992: { items: items },
					1200: { items: items },
				}
			} );
		} );
	}


	// Image Carousel
	var $imageCarousel = $( '.image-carousel .inner' );
	if ( $imageCarousel.length > 0 ) {
		$imageCarousel.each( function () {

			var dataLoop 	 = $( this ).parent().data( 'loop' ),
					autoPlay   = $( this ).parent().data( 'autoplay' ),
					timeOut    = $( this ).parent().data( 'interval' ),
					autoheight = $( this ).parent().data( 'autoheight' ),
					bullets = $( this ).parent().data( 'bullets' ) || false,
					nav = $( this ).parent().data( 'nav' );

			$( this ).owlCarousel( {
				items: 1,
				loop: dataLoop,
				margin: 0,
				nav: nav,
				dots: bullets,
				navText: [ , ],
				autoplay: autoPlay,
				autoplayTimeout: timeOut,
				autoHeight: autoheight
			} );
		} );
	}


	// Gallery Carousel
	var $galleryCarousel = $( '.gallery-grid .inner' );
	if ( $galleryCarousel.length > 0 ) {
		$galleryCarousel.each( function () {

			var dataLoop 	 = $( this ).parent().data( 'loop' ),
					autoPlay   = $( this ).parent().data( 'autoplay' ),
					timeOut    = $( this ).parent().data( 'interval' ),
					itemsMobile = $( this ).parent().data( 'items-mobile' ),
					itemsTablet = $( this ).parent().data( 'items-tablet' ),
					itemsDesktop = $( this ).parent().data( 'items-desktop' ),
					autoheight = $( this ).parent().data( 'autoheight' );

			$( this ).owlCarousel( {
				loop: dataLoop,
				margin: 0,
				nav: true,
				dots: false,
				navText: [ , ],
				autoplay: autoPlay,
				autoplayTimeout: timeOut,
				autoHeight: autoheight,

				responsive : {
				    // breakpoint from 0 up
				    0 : {
				        items: itemsMobile
				    },
				    // breakpoint from 480 up
				    768 : {
				        items: itemsTablet
				    },
				    // breakpoint from 768 up
				    1200 : {
				        items: itemsDesktop
				    }
				}
			} );
		} );
	}




	// Video Popup
	var $videoBtn = $( '.video-popup-btn > .play-btn, .video-popup-tile .play-btn' );
	if( $videoBtn.length > 0 ) {
		$videoBtn.magnificPopup( {
		  type: 'iframe',
		  mainClass: 'mfp-fade',
		  removalDelay: 500
		} );
	}


	// Contdown
	if($('.countdown').length > 0) {
		$('.countdown').countdown('2017/10/10', function(event) {
		  var $this = $(this).html(event.strftime(''
		    + '<div class="count-item">%D<div>Days</div></div>'
		    + '<div class="count-item">%H<div>hours</div></div>'
		    + '<div class="count-item">%M<div>Minutes</div></div>'
		    + '<div class="count-item">%S<div>Seconds</div></div>'));
		});
	}


	// Scroll Reveal Animations
	if($('.scrollReveal').length && ! $('html.ie9').length) {
		$('.scrollReveal').parents('section').css('overflow', 'hidden');
		window.sr = ScrollReveal({
			reset: true,
			distance: '32px',
			mobile: true,
			duration: 850,
			scale: 1,
			viewFactor: 0.3,
			easing: 'ease-in-out'
		});
		sr.reveal('.sr-top', { origin: 'top' });
		sr.reveal('.sr-bottom', { origin: 'bottom' });
		sr.reveal('.sr-left', { origin: 'left' });
		sr.reveal('.sr-long-left', { origin: 'left', distance: '70px', duration: 1000 });
		sr.reveal('.sr-right', { origin: 'right' });
		sr.reveal('.sr-long-right', { origin: 'right', distance: '70px', duration: 1000 });
		sr.reveal('.sr-scaleUp', { scale: '0.8' });
		sr.reveal('.sr-scaleDown', { scale: '1.15' });

		sr.reveal('.sr-delay-1', { delay: 200 });
		sr.reveal('.sr-delay-2', { delay: 400 });
		sr.reveal('.sr-delay-3', { delay: 600 });
		sr.reveal('.sr-delay-4', { delay: 800 });
		sr.reveal('.sr-delay-5', { delay: 1000 });
		sr.reveal('.sr-delay-6', { delay: 1200 });
		sr.reveal('.sr-delay-7', { delay: 1400 });
		sr.reveal('.sr-delay-8', { delay: 1600 });

		sr.reveal('.sr-ease-in-out-quad', { easing: 'cubic-bezier(0.455,  0.030, 0.515, 0.955)' });
		sr.reveal('.sr-ease-in-out-cubic', { easing: 'cubic-bezier(0.645,  0.045, 0.355, 1.000)' });
		sr.reveal('.sr-ease-in-out-quart', { easing: 'cubic-bezier(0.770,  0.000, 0.175, 1.000)' });
		sr.reveal('.sr-ease-in-out-quint', { easing: 'cubic-bezier(0.860,  0.000, 0.070, 1.000)' });
		sr.reveal('.sr-ease-in-out-sine', { easing: 'cubic-bezier(0.445,  0.050, 0.550, 0.950)' });
		sr.reveal('.sr-ease-in-out-expo', { easing: 'cubic-bezier(1.000,  0.000, 0.000, 1.000)' });
		sr.reveal('.sr-ease-in-out-circ', { easing: 'cubic-bezier(0.785,  0.135, 0.150, 0.860)' });
		sr.reveal('.sr-ease-in-out-back', { easing: 'cubic-bezier(0.680, -0.550, 0.265, 1.550)' });
	}


	// Revolution SLider
	// Isotope Grid Layout
	if($('.revoVer1').length > 0) {
	  	$(".revoVer1").revolution({
	      sliderType:"standard",
	      sliderLayout:"fullwidth",
	      responsiveLevels:[991,768,480,360],
	      delay:9000,
	      spinner: "spinner2",
	      navigation: {
	          arrows:{enable:true},
	          bullets:{
	          	enable:true,
	          	style:"square-bullets",
	          	h_align: "center",
	          	v_align: "bottom",
	          	v_offset: 30,
	          	hide_onleave: false,
	          	tmp: '<span></span>',
	          	space: 4
	          }
	      },
	      gridwidth:[991,768,480,350],
	      gridheight:[775,600,500,400]
	    });
	}


	// Timeline trigger
  $('.timeline li').waypoint(function(direction) {
    $(this.element).addClass('in-view')
  }, {
    offset: '75%'
  })


	// **************************** !!!!!!!!!!
	// All Scripts For On Load Init
	$(window).on('load', function() {

		// Isotope Grid Layout
		if($('.masonry-grid').length > 0) {
		  $('.masonry-grid').isotope({
			  itemSelector: '.grid-item',
				masonry: {
					columnWidth: '.grid-sizer',
					gutter: '.gutter-sizer'
				}
		  });
		}


		// Background Parallax
		if ( ! Modernizr.touch && ! $('html.ie').length ) {
			if ( $( "body.parallax" ).length > 0 ) {
				$.stellar( {
					scrollProperty: 'scroll',
					verticalOffset: 0,
					horizontalOffset: 0,
					horizontalScrolling: false,
					responsive: true
				} );
			}
		}



	}) /* On Load END */

	// Carousel init for settings panel
	var $settingsCarousel = $( '.settings-carousel .inner' );
	if ( $settingsCarousel.length > 0 ) {
		$settingsCarousel.each( function () {

			var dataLoop 	 = $( this ).parent().data( 'loop' ),
					autoPlay = $( this ).parent().data( 'autoplay' ),
					timeOut = $( this ).parent().data( 'interval' ),
					nav = $( this ).parent().data( 'nav' );

			$( this ).owlCarousel( {
				loop: dataLoop,
				margin: 20,
				nav: nav,
				dots: false,
				autoplay: autoPlay,
				autoplayTimeout: timeOut,
				responsiveClass: true,
				navText: [ , ],
				responsive: {
					0: { items: 1 },
					480: { items: 1 },
					700: { items: 1 },
					1000: { items: 1 },
					1200: { items: 1 },
				}
			} );
		} );
	}

	var templateSettings = $(".settings-toggle");
	var parentSettings = $(".template-settings");

	templateSettings.on('click', function(){
		parentSettings.toggleClass('active');
	});


});/* Document Ready End */
