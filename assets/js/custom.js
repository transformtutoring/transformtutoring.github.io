(function($) {

    "use strict";

    /* ==========================================
          2.    Preloader 
    ========================================== */
    if ($('.loader-wrapper').length > 0) {
        $(window).on('load', function() {
            $('.loader-wrapper').fadeOut();
            $('.lds-roller').delay(350).fadeOut("slow", 0.0);
            $('body').css({
                'overflow-y': 'scroll'
            });
        });
    }	

    /* ==========================================
          2.    Search popup 
    ========================================== */

    $(".search-popup-icon").on('click',  function() {
        $('.searchBoxTop').toggleClass('active');
    });
    $(".searchClose").on('click',  function() {
        $('.searchBoxTop').removeClass('active');
    });

     var sjs = SimpleJekyllSearch({
        searchInput: document.getElementById('search-input'),
        resultsContainer: document.getElementById('results-container'),
        json: '/search.json'
      });

    /* ==========================================
          2.    banner-slider   
    ========================================== */
    if ( $('.mainSlider').length ) {
        $('.mainSlider').nivoSlider({
            manualAdvance: false,  
            directionNav: true,
            animSpeed: 500,
            slices: 18,
            pauseTime: 10000,
            pauseOnHover: true,
            controlNav: false,
            prevText: '<i class="fa fa-angle-left nivo-prev-icon"></i>',
            nextText: '<i class="fa fa-angle-right nivo-next-icon"></i>'
          });
        }

		if ($('.banner-carousel2').length) {
		$('.banner-carousel2').owlCarousel({
			animateOut: 'slideOutUp',
    		animateIn: 'fadeDown',
			loop:true,
			margin:0,
			nav:true,
			singleItem:true,
			smartSpeed: 500,
			autoHeight: false,
			autoplay: true,
			autoplayTimeout:10000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1024:{
					items:1
				},
			}
		});    		
	}
    /* ==========================================
          2.    testimonial-slider   
    ========================================== */

 $('.testimonial-slider').slick({
  dots: true,
  autoplay: true,
  autoplaySpeed:5000,
  arrows:false,
  infinite: true,
  speed: 500,
  fade: false,
  });
    /* ==========================================
          2.    shop product slider   
    ========================================== */



$('.shop-product-slider').slick({
  arrows: false,
  dots: false,
  autoplay: true,
  autoplaySpeed:2000,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 510,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
    
    /* ==========================================
          2.    Modal Popup   
    ========================================== */
	$('#cart-popup').apFullscreenModal({
		openSelector: '#cart-popup-open',
		backgroundColor: '#fafafa',
		closeSelector: '.close-modal, #send',
	});

    /* ==========================================
          2.    Scollup   
    ========================================== */
    var offset = 300,
    offset_opacity = 1200,
    scroll_top_duration = 1000,
    $back_to_top = $('#scrollUp');
    $back_to_top.on('click', function(event) {
    event.preventDefault();
    $('body,html').animate({
        scrollTop: 0,
    }, scroll_top_duration);
});


   /* ==========================================
             6.    Show Hide
     ========================================== */


	$(".hide-shop-close").on("click", function(){
		
		$(this).parents(".hide-shop-item").fadeOut();
	});
    /*=============================================
        8. Paralax Active JS
    ===============================================*/
   
    $('.slimmenu').slimmenu({
        resizeWidth: '992',
        collapserTitle: 'Main Menu',
        animSpeed: 'medium',
        indentChildren: true,
    });  
  
	/*=============================================
        8. Active WoW JS
    ===============================================*/

    new WOW().init();
	
	
	
	/*=============================================
        8. Shop Thumbnail Slider Slick
    ===============================================*/
	
	if ( $('.shop-thumbnail-big').length ) {
        var $slider = $('.shop-thumbnail-big')
            .on('init', function(slick) {
                $('.shop-thumbnail-big').fadeIn(1000);
            })
            .slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                autoplay: true,
				draggable:false,
				fade:true,
                autoplaySpeed: 3000,
                asNavFor: '.shop-thumbnail-small'
            });

    var $slider2 = $('.shop-thumbnail-small')
            .on('init', function(slick) {
                $('.shop-thumbnail-small').fadeIn(2000);
            })
            .slick({
                slidesToShow: 3,
				swipe:false,
				arrows: false,
                slidesToScroll: 1,
                asNavFor: '.shop-thumbnail-big',
                dots: false,
                centerMode: false,
                focusOnSelect: true
            });

 $('.shop-thumbnail-small .slick-slide').removeClass('slick-active');
 $('.shop-thumbnail-small .slick-slide').eq(0).addClass('slick-active');
 $('.shop-thumbnail-big').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
 	var mySlideNumber = nextSlide;
 	$('.shop-thumbnail-small .slick-slide').removeClass('slick-active');
 	$('.shop-thumbnail-small .slick-slide').eq(mySlideNumber).addClass('slick-active');
});
  
$(['js-sliderWithProgressbar'], function(slider) {

    $('.shop-thumbnail-big').each(function() {

        me.slider = new slider($(this), options, sliderOptions, previewSliderOptions);

    });
});
  var options = {
    progressbarSelector    : '.bJS_progressbar'
    , slideSelector        : '.bJS_slider'
    , previewSlideSelector : '.bJS_previewSlider'
    , progressInterval     : ''
    , onCustomProgressbar : function($slide, $progressbar) {}
}
var sliderOptions = {
    slidesToShow   : 1,
    slidesToScroll : 1,
    arrows         : false,
    fade           : true,
    autoplay       : true
}
var previewSliderOptions = {
    slidesToShow   : 3,
    slidesToScroll : 1,
    dots           : false,
    focusOnSelect  : true,
    centerMode     : true
}
}

	
	

})(jQuery);