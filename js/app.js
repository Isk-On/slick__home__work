$(document).ready(function(){
  $('.first__slider').slick({
    slickCurrentSlide: true,
    asNavFor: '.second__slider',
});
  });


  $(document).ready(function(){
    $('.second__slider').slick({
      // slickCurrentSlide: true,
      vertical: true,
      // slidesToShow: 3,
      asNavFor: '.first__slider',
      slidesToScroll: 1,
      centerPadding: '150px',
      centerMode: true,
      dots: false,
      infinite: true,
      focusOnSelect: true,
      arrows: false,
  });
    });
  
  