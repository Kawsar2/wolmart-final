$(function () {
      'use strict'
      // banner slider
      $('#banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        dots: false,
        arrow: true,
        autoplaySpeed: 1000,
        nextArrow: '<i class="fas fa-chevron-right net-arrow"></i>',
        prevArrow: '<i class="fas fa-chevron-left pre-arrow"></i>',
      });

      // hot day seller slider

      $('.seller').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        dots: false,
        arrow: true,
        autoplaySpeed: 1000,
        nextArrow: '<i class="fas fa-chevron-right net-arrow"></i>',
        prevArrow: '<i class="fas fa-chevron-left pre-arrow"></i>',
        // vertical:true,
        fade: true,
      });

      // counter down
      $('.coundown').countdown('2023/08/21', function (event) {
        $(this).html(event.strftime(' %n, %H:%m:%S'));
      });

      // Hide button
      $('.hide').click(function () {
        $('.btn-body').fadeOut();
      });

      // show button
      $('.show').click(function () {
        $('.btn-body').fadeIn();

      });

      // increment decrement handle counter
      $('#handleCounter').handleCounter();

      // zoom_left_slider

      $('.zoom_left_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        dots: false,
        arrow: true,
        autoplaySpeed: 1000,
        nextArrow: '<i class="fas fa-chevron-right net-arrow"></i>',
        prevArrow: '<i class="fas fa-chevron-left pre-arrow"></i>',
      });


      //  Zoom Slider start
      var myCarousel = document.querySelector('#carouselExampleIndicators')
      var carousel = new bootstrap.Carousel(myCarousel, {
        interval: false,
        wrap: false
      });

      // accordion js start
      $(".accordion-content").css("display", "none");


      $(".accordion-title").click(function () {

        $(".accordion-title").not(this).removeClass("open");

        $(".accordion-title").not(this).next().slideUp(300);

        $(this).toggleClass("open");

        $(this).next().slideToggle(300);
      });

      // vendor page counter down
      $('#abc').countdown('2022/08/30', function (event) {
        $(this).html(event.strftime(' %n <span>Days</span>'));
      });
      $('#abcd').countdown('2023/08/21', function (event) {
        $(this).html(event.strftime(' %H <span>Hours</span>'));
      });
      $('#abcde').countdown('2023/08/21', function (event) {
        $(this).html(event.strftime(' %M <span>Mins</span>'));
      });

      $('#abcdef').countdown('2023/08/21', function (event) {
        $(this).html(event.strftime(' %S <span>Secs</span>'));
      });

      // Blog slider
      $('.popular_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        dots: false,
        arrow: true,
        autoplaySpeed: 1000,
        nextArrow: '<i class="fas fa-chevron-right net-arrow"></i>',
        prevArrow: '<i class="fas fa-chevron-left pre-arrow"></i>',
        fade: true,
      });


//back to top

       $('.back_to_top').click(function () {
        $('html, body').animate({
            scrollTop: 0,
        }, 2000);
    });

    $(window).scroll(function () {
        var scroll2 = $(this).scrollTop();
        if (scroll2 > 150) {
            $('.back_to_top').fadeIn();
        } else {
            $('.back_to_top').fadeOut();
        }
    });


      //About Counter js start
      $('.counter').counterUp({
        delay: 10,
        time: 1000
      });

      // Bcm Page success slider js

      $('.sucess_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        dots: true,
        arrows: false,
        autoplaySpeed: 1000,
      });
    });

   var navOff = $('#menu').offset().top;

    $(window).scroll(function(){
      var scrolling = $(this).scrollTop()
      if(scrolling > navOff){
          $('#menu').addClass('menu_fix');
      }
      else{
          $('#menu').removeClass('menu_fix')
      }



    });