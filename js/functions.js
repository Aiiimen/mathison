$(function(){

   // jQuery methods



   //AOS animation
   animationsOnScroll();
   //smooth scroll
   smoothScroll();




});


function dataTable(){
    $('#example').DataTable();
}


function animationsOnScroll(){
  AOS.init({
    duration: 800,
  });
}


function smoothScroll(){
  //smooth scrolling method

  $('a[href^="#"]').on('click', function(event){
    var target = $( $(this).attr('href'));
    if(target.length){
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      },1000)
    }
  });
}
