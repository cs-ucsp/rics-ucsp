jQuery( function($) {

	// attach a function to the quote comment link
	jQuery('.quote-link a').click( function() {
      var tb = jQuery('#comment');
      var strQuote = $(this).attr('data-quote');
      // assign the value
	  jQuery('#comment').focus();
      tb.val('<blockquote>' + strQuote + '</blockquote> \n');
	  jQuery('#comment').select(false);
      jQuery('body,html').animate({ scrollTop: tb.offset().top - 60 },{
                    duration: 350
		});
      return false;
	});

	if (jQuery('.fitVids').length) {
		jQuery('.fitVids').fitVids();
	}
	
	// Image preloader
	target = $( '.slides li, .carousel-thumb a, .author-img-link, .post-thumb a, .news-in-pictures li a, .single-post-thumb, .related-posts div a' );
	images = target.find( 'img' );
	counter = 0;
	i = 0;
	loaded = [];
	nextDelay = 0;
	images.each( function() {
		if ( $( this ).parent().length == 0 )
			$( this ).wrap( '<span class="preload" />' );
		else
			$( this ).parent().addClass( 'preload' );
		loaded[i++] = false;
	} );
	images = $.makeArray( images );

	timer = setInterval( function() {
		if ( counter >= loaded.length )
		{
			clearInterval( timer );
			return;
		}
		for ( i = 0; i < images.length; i++ )
		{
			if ( images[i].complete )
			{
				if ( loaded[i] == false )
				{
					loaded[i] = true;
					counter++;
					nextDelay = nextDelay + 100;
				}
				$( images[i]).css( 'visibility', 'visible' ).delay( nextDelay ).animate( { opacity:1 }, 300,
				function() {
					$( this ).parent().removeClass( 'preload' );
				} );
			}
			else
			{
				$( images[i] ).css( { 'visibility':'hidden', opacity:0 } );
			}
		}
	}, 100 );

});

jQuery(document).ready(function() {
	
	jQuery("#top-menu-ul, #main-nav, #hb-wpml").supersubs({
			minWidth:    10,  
			maxWidth:    27,
			extraWidth:  1,
			autoArrows	: false,
			speed: 10,           // speed of the opening animation. Equivalent to second parameter of jQuery’s .animate() method
			dropShadows: false 
                               
		}).superfish({
		animation:   {height:'show', opacity:'show'},    // slide-down effect without fade-in
		delay:     300               // 0.3 second delay on mouseout
	});


	// Attach Fancybox class to images in gallery
	var $captionText = "";
	if (jQuery('.gallery').length ){
		jQuery('dt.gallery-icon').find('a').each(function() {
			$captionText = "";
			$captionText = jQuery(this).parent().parent().find('.wp-caption-text').html();
			jQuery(this).addClass('fancybox').attr('rel', 'hb-gallery-group');

			if ( typeof $captionText != 'undefined' )
				var $decodedTitle = jQuery('<div />').html($captionText).text();
				$decodedTitle = jQuery.trim($decodedTitle);
				jQuery(this).attr('title', $decodedTitle);
		});
	}

	if(jQuery().fancybox) {
			jQuery("a.fancybox").fancybox({
				'transitionIn'	:	'elastic',
				'transitionOut'	:	'fade',
				'speedIn'		:	300, 
				'speedOut'		:	300, 
				'overlayShow'	:	true,
				'autoScale'		:	true,
				'titleShow'		: 	true,
				'titlePosition'	:   'inside',
				'margin'		: 	10
			});
			
			jQuery("a.fancy-iframe").fancybox({
				'type'			: 'iframe'
			});
	}
	
	
	// Tipsy Effect
	jQuery('#header-wrapper .ss li, #breaking-title').tipsy(
	{
		gravity: 'n',
		opacity: 1,
		offset: 5,
		fade: false,
		delayIn: 200		
	});
	
	jQuery('.tooltip, .meta-cat-list, .ssm li, #hb-wpml').tipsy(
	{
		gravity: 's',
		opacity: 1,
		offset: 0,
		fade: false,
		delayIn: 0		
	});
	
	jQuery('.archive-list li a').tipsy(
	{
		gravity: 'w',
		opacity: 1,
		offset: 10,
		fade: false,
		delayIn: 100		
	});

	if (jQuery('.timeline-wrap').length) {
		jQuery('i.icon-circle').tipsy(
		{
			gravity: 'e',
			opacity: 1,
			offset: 2,
			fade: false,
			delayIn: 100		
		});
	}

	jQuery(function(){
	jQuery.extend(jQuery.fn.disableTextSelect = function() {
		return this.each(function(){
			if(jQuery.browser.mozilla){//Firefox
				jQuery(this).css('MozUserSelect','none');
			}else if(jQuery.browser.msie){//IE
				jQuery(this).bind('selectstart',function(){return false;});
			}else{//Opera, etc.
				jQuery(this).mousedown(function(){return false;});
			}
		});
	});
	jQuery('#responsive-nav, .newsticker_controls, .newsticker_controls li, .newsticker_controls li a, .nav-icon, #responsive-top-nav').disableTextSelect(); //No text selection on elements with a class of 'noSelect'
});
	
	jQuery('.flexslider').flexslider({
                        animation: "fade",
                        animationLoop: true,
                        pauseOnHover: true,
                        move: 1,
                        controlNav: true,
                        slideshow: true,
                        slideshowSpeed: 7000,
                        smoothHeight: false
                      });

	
	// Tipsy Effect
	jQuery('#random-post, .author-img-link, .cat-rss, .news-in-pictures li a').tipsy(
	{
		gravity: 's',
		opacity: 1,
		offset: 3,
		fade: false,
		delayIn: 250
		
	});
	
	jQuery('.flexslider').hover(function () {
		jQuery(this).find('.flex-prev').stop(false, false).animate({left: 16}, 300, 'easeInOutQuad');
		jQuery(this).find('.flex-next').stop(false, false).animate({right: 16}, 300, 'easeInOutQuad');
	}, 
		function () {
			jQuery(this).find('.flex-prev').stop(false, false).animate({left: -40}, 300, 'easeInOutQuad');
			jQuery(this).find('.flex-next').stop(false, false).animate({right: -40}, 300, 'easeInOutQuad');
	});
	
	if( jQuery('.new-marker').length) {
		jQuery('.new-marker > a').append('<span class="new-marker-unit">NEW</span>');
	}
	
	if( jQuery('.hot-marker').length) {
		jQuery('.hot-marker > a').append('<span class="hot-marker-unit">HOT</span>');
	}
	
	var search_flag = false;
	if (jQuery('#header-search').length){
		if (jQuery.browser.msie){
			jQuery('.search-input').attr('value', 'Search and press enter...');
		}
	}
	jQuery('#header-search').click(function() {
		$elementThis = jQuery(this);
			jQuery(this).removeClass('search-form-hidden').addClass('search-form-visible');
			jQuery('.header-search-form').addClass('hb-pop-class').css('display', 'block').css('opacity', 1);
			jQuery('.search-input').select();
			search_flag = true;
	});
	
	jQuery("#header-search").click(function(e) {
			e.stopPropagation(); // This is the preferred method.
			//return false;  
	});
	
	jQuery(document).click(function () {
		if (jQuery(".header-search-form").is(":visible") ) {
				jQuery('.header-search-form').fadeToggle(150);
				jQuery('#header-search').toggleClass("search-form-visible");
				jQuery('.search-input').val("");
				
				if (jQuery.browser.msie){
					jQuery('.search-input').attr('value', 'Search and press enter...');
				}
				
				return false;
		}
			
	});
	
	jQuery('#hide-system-message').click(function(){
		jQuery(this).parent().parent().css('opacity', 0).hide(0);
		
		jQuery.cookie('hb-sysmessage-cookie', '1', { expires: 7, path: '/' });
	});

	/* Scroll Top function */
		if ( jQuery('body').is('.login') ) return false;
		else {
			if (jQuery('#scrollTop').length){	
				var showHeight = jQuery(window).height()/2;
				var scrollTop = jQuery('#scrollTop');

				// Check on page load
				if(jQuery(window).scrollTop() >= (showHeight)) {
					jQuery('#scrollTop').show();
				}

				// Check on scroll event
				jQuery(window).scroll(function () {
					if(jQuery(window).scrollTop() > (showHeight)) {
						jQuery('#scrollTop').show();
					} else {
						jQuery('#scrollTop').hide();
					}
				});	
			}
		}
		
		jQuery('#scrollTop').click(function(e) {
			e.preventDefault();
			jQuery('body,html').animate({ scrollTop: "0" },{
                    duration: 1000,
                    easing: 'easeInOutExpo'
            });
		});
		/* -------------------------------------------------------- */
		
		// Sticky Navigation
		if ( jQuery('#main-wrapper').hasClass('hb_sticky_nav') ){
			jQuery('#main-navigation-wrapper').sticky();
		}
		
		/* jQuery('.social-count-widget .twitter-count').each(function(){
                var o = jQuery(this);
                var twid=   o.attr('twitter-id');
                if(typeof(twid)!='undefined' && twid!=''){
                    //send request 
                    jQuery.ajax({
                       url: 'http://twitter.com/users/'+twid+'.json?callback=?',
                       dataType: 'json',
                       data : { }, 
                       type: 'get',
                       cache: false,
                       timeout: 30000, // 30 sec
                       success: function(data){
                            try{
                                  var num = data.followers_count;
                                  var text= (num>1 || subs==0) ? o.attr('plural-text'): o.attr('one-text');
                                 jQuery('.count-number',o).html(nWc(data.followers_count));
                                 jQuery('.txt',o).html(text);

                            }catch(e){
                            }
                       } 
                    });
                } 
            });
			*/
			
			// youtube 
			if (jQuery('.youtube-count-wrap').length){
				jQuery('.social-count-widget .youtube-count').each(function() {
					var o = jQuery(this);
					var id = o.attr('youtube-id');
					var subs = 0;
					var text = null;
					
						jQuery.getJSON('http://gdata.youtube.com/feeds/api/users/'+ id +'?alt=json', function(response) {
							subs =  response.entry.yt$statistics.subscriberCount;						
							text = (subs>1 || subs==0) ? o.attr('plural-text'): o.attr('one-text');
							jQuery('.count-number',o).html(nWc(subs));
							jQuery('.txt',o).html(text);
						});
					
				});
			}
			
            
            // facebook
            
           jQuery('.social-count-widget .facebook-count').each(function(){
                var o = jQuery(this);
                var id=  o.attr('facebook-id');
                if(typeof(id)!='undefined' && id!=''){
                    //send request 
                    jQuery.ajax({
                       url: 'http://graph.facebook.com/'+id,
                       dataType: 'json',
                       data : { }, 
                       type: 'get',
                       cache: false,
                       
                       timeout: 30000, // 30 sec
                       success: function(data){
                            try{
                                  var num = data.likes;
                                  var text= (num>1 || subs==0) ? o.attr('plural-text'): o.attr('one-text');
                                 jQuery('.count-number',o).html(nWc(data.likes));
                                 jQuery('.txt',o).html(text);
                            }catch(e){
                            }
                       } 
                    });
                } 
            }); 
			
			function nWc(x) {
				if (x >= 1000000 && x < 15000000)
					return "+1M"
				else if (x >= 1500000 && x < 2000000) {
					return "+1,5M"
				}
				else if (x >= 2000000 && x < 4000000) {
					return "+2M"
				}
				else if (x >= 4000000 && x < 5000000) {
					return "+4M"
				}
				else if (x >= 5000000) {
					return "+5M"
				}
				return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			}
			
			
			jQuery(".hb-tabs").each(function () {
            var b = jQuery(this).children(".titles").children("li"),
                c = jQuery(this).children(".contents").children("div"),
                d = b.eq(0),
                e = c.eq(0);
            d.addClass("opened");
            b.click(function () {
                d.removeClass("opened");
                d = jQuery(this);
                d.addClass("opened");
                e.stop().slideUp(200);
                e = c.eq(jQuery(this).index());
                e.stop().delay(200).slideDown(200);
                return !1
            })
        });
		
		
		jQuery(".hb-accordion").each(function () {

			var b = jQuery(this).hasClass("toggle") ? !0 : !1,
				c = jQuery(this).children("section"),
				d = "-1" == jQuery(this).data("opened") ? null : c.eq(parseInt(jQuery(this).data("opened")));
			null != d && (d.addClass("opened"), d.children("div").slideDown(0));
			jQuery(this).children("section").children("h4").click(function () {
				$this = jQuery(this).parent();
				!b && null != d && (d.removeClass("opened"), d.children("div").stop().slideUp(300));
				$this.hasClass("opened") && b ? ($this.removeClass("opened"), $this.children("div").stop().slideUp(300)) : $this.hasClass("opened") || (d = $this, $this.addClass("opened"), $this.children("div").stop().slideDown(300))
			})
		});
		
		jQuery('.post-thumb > a, .post-thumb-wrapper').hover( function () {
			jQuery(this).find('.image-overlay-inside').stop(false, true).animate(
			{opacity: 0.6}, 200, 'easeInOutQuad').find('.image-overlay-cross').addClass('hb-pop-class-small');
		}, function () {
			jQuery(this).find('.image-overlay-inside').stop(false, true).animate(
			{opacity: 0}, 200, 'easeInOutQuad').find('.image-overlay-cross').removeClass('hb-pop-class-small');
		});
		
		jQuery('.post-thumb > a, .post-thumb-wrapper a.post-thumb').each(function() {
			jQuery(this).append('<div class="image-overlay-inside"><div class="image-overlay-cross"></div></div>');
		});

		/* Responsive Menu */
		jQuery('#responsive-nav').click(function() {
			jQuery(this).parent().toggleClass('responsive-active');
			jQuery(this).parent().find('#resp-menu').toggleClass('hb-pop-class');
		});

		/* Responsive Menu */
		jQuery('#responsive-top-nav').click(function() {
			jQuery(this).parent().toggleClass('responsive-active');
			jQuery(this).parent().find('#top-resp-menu').toggleClass('hb-pop-class');
		});

		/* Populate elements */
		jQuery('#resp-menu').html(jQuery('#main-nav').html());
		jQuery('#top-resp-menu').html(jQuery('#top-nav-wrapper').html());

		jQuery('#resp-menu .sf-with-ul, #top-resp-menu .sf-with-ul').click(function (e) {
			e.preventDefault();
			jQuery(this).toggleClass('dropdown-activated');
			jQuery(this).next('ul').slideToggle(0).css('visibility', 'visible');
		});

		/* Close overlay on escape */
		jQuery(document).keyup(function(e) {	
			if ( jQuery('#responsive-nav').hasClass('responsive-active') ){
				if (e.keyCode == 27) {
					jQuery('#responsive-nav').parent().toggleClass('responsive-active');
					jQuery('#resp-menu').toggleClass('hb-pop-class');
				}
			}
		});
	
});