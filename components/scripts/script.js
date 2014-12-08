$(function() {
  var isTouch = 'ontouchstart' in document.documentElement;
  
  
  // offcanvas menu
  var $transformer = $('.transformer'),
    $menuToggle = $('.menu-toggle');

  // Attaches event handler when .menu-toggle is clicked
  $('.menu-toggle').on('click', function(event) {
    event.preventDefault();
    $transformer.toggleClass('is-open');
    console.log('clicked');
  });
  // end offcanvas menu

  var $clipped = $('.clipped');
  var mobileNav = $('.mobile-nav');
  $('.mobile-nav-toggle').on('click', function() {
    if($clipped.hasClass('clipped-visible') || $clipped.hasClass('clipped-visible-sub')) {
      $clipped.removeClass('clipped-visible-sub').removeClass('clipped-visible');
      $('.mobile-nav').removeClass('open');
    } else {
      $clipped.addClass('clipped-visible');
      $('.mobile-nav').addClass('open');
    }
  });
  $('a#atools').on('click', function() {
    $('.clipped').removeClass('clipped-visible').addClass('clipped-visible-sub');
  });
  $('a#aback').on('click', function() {
    $('.clipped').removeClass('clipped-visible-sub').addClass('clipped-visible');
  });

  var ns = {};
  ns.anchorOffsets = {};
  var navOffset = $('.navbar').height();//patch
  // $('#intro').css({'padding-top' , navOffset + 'px'});
  $( "nav li" ).each(function(index) {
    // console.log( $( this ).text() + " " + $(this).position().left );
    ns.anchorOffsets[index] = $(this).position().left;
  });
//  var anchorOffsets = $('nav ul li a')).each(function);
  // var leftOffset = $('a[href$="#finances"]').position().left;

  //window height
  // var wheight = $(window).height()/2; //get height of the window

  // $('.fullheight').css('height', wheight);

  $(window).resize(function() {
    wheight = $(window).height()/2; //get height of the window
    // $('.fullheight').css('height', wheight);
    checkWidth();
    setNavHeight();
  }); //on resize
  $(window).trigger('resize');

  function setNavHeight() {
    var $c = $('nav').children();
    var h = 0;
    $c.each(function() {
      h += parseFloat($(this).css('height'));
    });

    $('nav').css({
      'height' : h + 'px'
    });
  }

  function checkWidth(){
    if( $(window).width() < 600){
      $('.navbar').css({
        'overflow-y': 'hidden',
        'overflow-x': 'scroll', 
        '-ms-overflow-style':'-ms-autohiding-scrollbar',
        '-webkit-overflow-scrolling': 'touch'
      });
    }else{
      $('.navbar').css({
      'overflow-y': 'hidden',
      'overflow-x': 'hidden'
      });
    }
     //make subnav scrollable
  }

// Animated Scrolling
  // $('a[href*=#]:not([href=#])').click(function() {
  //   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  //     var target = $(this.hash);
  //     target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  //     if (target.length) {
  //       $('html,body').animate({
  //         scrollTop: target.offset().top-topoffset
  //       }, 1000);
  //       return false;
  //     } // target.length
  //   } //location hostname
  // }); //on click
  
  // function updateNav(windowpos, id){
  //   varIdWithHash = '#' + id; 
  //   if (windowpos > $(id).offset().top) {
  //     $('nav li a').removeClass('active');
  //     $('a[href$='+id+']').addClass('active');
  //   } //windowpos
  // }
  
  //highlight navigation
  $(window).scroll(function() {
    if($('body').hasClass('shoppingTools')){


      var topoffset = $('.navbar').height();
      var windowpos = $(window).scrollTop() + topoffset;
      $('nav li a').removeClass('active');

      // $('.scene').each(function(){ 
        // var id = $(this).attr('id');
        // updateNav(windowpos, '#' + $(this).attr('id'));//closure problem
        //$('nav ul li' + id ).offset().left
      //   }
      // );

      if (windowpos > $('#toolBundles').offset().top) {
        $('nav li a').removeClass('active');
        $('a[href$="#toolBundles"]').addClass('active');
      } //windowpos

      if (windowpos > $('#finances').offset().top) {
        $('nav li a').removeClass('active');
        $('a[href$="#finances"]').addClass('active');

        // $('nav .abs-wrapper ul').css({
        //   'margin-left' : -$('nav ul li' + '#finances' ).offset().left + 'px'
        // }); // slide nav

      } //windowpos

      if (windowpos > $('#marketing').offset().top) {
        $('nav li a').removeClass('active');
        $('a[href$="#marketing"]').addClass('active');
      } //windowpos

      if (windowpos > $('#safeguarding').offset().top) {
        $('nav li a').removeClass('active');
        $('a[href$="#safeguarding"]').addClass('active');
      } //windowpos
    }


  }); //window scroll

  //set up ScrollMagic
  var controller = new ScrollMagic({
    globalSceneOptions: {
      triggerHook: "onLeave"
    }
  });

  //pin the navigation
  var pin = new ScrollScene({
    triggerElement: '#nav',
  }).setPin('#nav').addTo(controller);

  // var pinOne = new ScrollScene({
  //   triggerElement: '#menu',
  // }).setPin('#menu').addTo(controller);

  // if(!isTouch) {
  //   //room animations
  //   var roomOrigin = {
  //     bottom: -700,
  //     opacity: 0,
  //     scale: 0
  //   }

  //   var roomDest = {
  //     repeat: 1,
  //     yoyo: true,
  //     bottom: 0,
  //     opacity: 1,
  //     scale: 1,
  //     ease: Back.easeOut
  //   }

  //   var roomtween = TweenMax.staggerFromTo(
  //     "#westminster .content",
  //     1, roomOrigin, roomDest);

  //   var pin = new ScrollScene({
  //     triggerElement: '#westminster',
  //     offset: -topoffset,
  //     duration: 500
  //   }).setPin('#westminster')
  //     .setTween(roomtween)
  //     .addTo(controller)


  //   var roomtween = TweenMax.staggerFromTo(
  //     "#oxford .content",
  //     1, roomOrigin, roomDest);

  //   var pin = new ScrollScene({
  //     triggerElement: '#oxford',
  //     offset: -topoffset,
  //     duration: 500
  //   }).setPin('#oxford')
  //     .setTween(roomtween)
  //     .addTo(controller)

  //   var roomtween = TweenMax.staggerFromTo(
  //     "#victoria .content",
  //     1, roomOrigin, roomDest);

  //   var pin = new ScrollScene({
  //     triggerElement: '#victoria',
  //     offset: -topoffset,
  //     duration: 500
  //   }).setPin('#victoria')
  //     .setTween(roomtween)
  //     .addTo(controller)

  //   var roomtween = TweenMax.staggerFromTo(
  //     "#manchester .content",
  //     1, roomOrigin, roomDest);

  //   var pin = new ScrollScene({
  //     triggerElement: '#manchester',
  //     offset: -topoffset,
  //     duration: 500
  //   }).setPin('#manchester')
  //     .setTween(roomtween)
  //     .addTo(controller)

  //   var roomtween = TweenMax.staggerFromTo(
  //     "#piccadilly .content",
  //     1, roomOrigin, roomDest);

  //   var pin = new ScrollScene({
  //     triggerElement: '#piccadilly',
  //     offset: -topoffset,
  //     duration: 500
  //   }).setPin('#piccadilly')
  //     .setTween(roomtween)
  //     .addTo(controller)


  //   var roomtween = TweenMax.staggerFromTo(
  //     "#cambridge .content",
  //     1, roomOrigin, roomDest);

  //   var pin = new ScrollScene({
  //     triggerElement: '#cambridge',
  //     offset: -topoffset,
  //     duration: 500
  //   }).setPin('#cambridge')
  //     .setTween(roomtween)
  //     .addTo(controller)

  // } //not a touch device


  //atractions animation
  // var attractionstween = TweenMax.staggerFromTo('#attractions article', 1, { opacity: 0, scale: 0 },
  //     {delay: 1, opacity: 1, scale: 1,
  //       ease: Back.easeOut});


  // var scene = new ScrollScene({
  //   triggerElement: '#attractions',
  //   offset: -topoffset
  // }).setTween(attractionstween)
  //   .addTo(controller);
}); //on load
