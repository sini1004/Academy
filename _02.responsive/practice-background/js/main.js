$('.trigger').click(function(){
  $(this).toggleClass('on');
  $('nav').slideToggle(400);
});

$(window).resize(function(){
  let winW = $(window).width(); //브라우저의 가로길이를 변수에 저장
  
  if(winW >= 768 && $('nav').is(':hidden')){
    $('nav').removeAttr('style');
  }
});