$(document).ready(function(){

 
  $('.gro_item').owlCarousel({

    margin:70,
    responsiveClass:true,
    responsive:{
        0:{
            items:4,
          
        },
        600:{
            items:6,
           
        },
        1000:{
            items:9,
        
   
        }
    }
});

$('.single-item ').slick(

  {

      infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
   prevArrow:'<button type="button" class="slick-prev"><i class="fa-solid fa-chevron-left"></i></button>',
      nextArrow:'<button type="button" class="slick-next"><i class="fa-solid fa-chevron-right"></i></button>',
  dots:true,
  }
);

// $('.one-time').slick({
//   dots: true,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 1,
//   adaptiveHeight: true,
//   prevArrow:'<button type="button" class="slick-prev"><i class="fa-solid fa-chevron-left"></i></button>',
//   nextArrow:'<button type="button" class="slick-next"><i class="fa-solid fa-chevron-right"></i></button>',
//   dots:true,
// });
$(".src").click(function(){
  $(".src1").toggle();
});

  });
