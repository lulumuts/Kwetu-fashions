
// var images=new Array('img/carousel11-compressor.jpg','img/carousel12-compressor.jpg','img/carousel13-compressor.jpg');
// var nextimage=0;
// doSlideshow();
//
// function doSlideshow(){
//     if(nextimage>=images.length){nextimage=0;}
//     $('.global-header')
//     .css('background-image','url("'+images[nextimage++]+'")')
//     .fadeIn(500,function(){
//         setTimeout(doSlideshow,1000);
//     });
// }
$(document).ready(function(){
     $("#myCarousel").carousel();
});
$('.carousel').carousel();

var things = [];

$("#submit-button").click(function() {
  var thing = $("#materialFormCardNameEx").val();
  things.push(thing)

  var thing = $("#materialFormCardEmailEx").val();
    things.push(thing)

  var thing = $("#materialFormCardEmailEx").val();
    things.push(thing)

  var thing = $("#materialFormCardConfirmEx").val();
  things.push(thing)

});
