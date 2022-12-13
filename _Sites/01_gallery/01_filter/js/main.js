const $btn = $('.nav li a'); //버튼역할하는 nav a를 변수로
$btn.click(function(){
  $btn.removeClass('active');
  $(this).addClass('active');
})

$('.btn_all').click(function(){
  $('.all').fadeIn(500);
})

$('.btn_web').click(function(){
  $('.all').hide();
  $('.web').fadeIn(500);
})

$('.btn_mobile').click(function(){
  $('.all').hide();
  $('.mobile').fadeIn(500);
})

$('.btn_motion').click(function(){
  $('.all').hide();
  $('.motion').fadeIn(500);
})

$('.btn_award').click(function(){
  $('.all').hide();
  $('.award').fadeIn(500);
})