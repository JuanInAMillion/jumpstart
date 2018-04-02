$(document).ready(function() {
  $('.carousel').slick({
    lazyLoad: 'ondemand',
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  });

/*  $(window).scroll(function(){
    var x = 0;
    var y = $(this).scrollTop();

    if(y - x > 50 ) {
      var z = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + z}, 150);
      x === y;
    } else if(x - y > 50) {
      $('.navbar').animate({top: '+' + z}, 150);
      x === y;
    }
  });
*/
});
