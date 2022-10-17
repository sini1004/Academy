$(function(){
  $('nav a').on('click',function(e){
    e.preventDefault();
    const aa = this.href;

    $('nav a.current').removeClass('current');
    $(this).addClass('current');


    $('.content_wrap').load(aa + ' #content').hide().fadeIn(1000);
    //#content앞에 여백 한칸이 있어야 함
  })
});