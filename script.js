// Burger slider
$(".burger-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: ".slider-prev",
  nextArrow: ".slider-next"
});

// Header slider
$(".header-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: ".slider-prev3",
  nextArrow: ".slider-next3"
});
 
// Comments slider
$(".comments-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: ".slider-prev2",
  nextArrow: ".slider-next2"
})

// Стрілка вниз
 $(function(){
  $('.header-href').bind('click.smoothscroll', function(){
    var target = $(this).attr('href'),
    bl_top = $(target).offset().top;
    $('body, html').animate({scrollTop: bl_top}, 1000);
    return false;
  })
 })


//  Adapt Menu
 function showMenu() {
  var element = document.getElementById('jsMenu');
  if (element.style.display == "block"){
    element.style.display = "none";
  } else {
    element.style.display = "block"
  }
}



