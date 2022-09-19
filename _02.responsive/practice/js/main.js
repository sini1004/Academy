//문서가 다 읽혀진 다음에 작동.
$(document).ready(function(){
  $('.allBtn').click(function(){
    $('nav').animate({left:0}, 400);
  });

  $('nav button').click(function(){
    $('nav').animate({left:-300}, 400);
  });

  $(window).resize(function(){
    $('nav').removeAttr('style');
  });


}); 
