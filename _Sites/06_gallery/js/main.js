const $btn = $('.nav ul li a'); //버튼역할하는 nav a를 변수로
$btn.click(function(){
  $btn.removeClass('active');
  $(this).addClass('active');
})

$('.btn_all').click(function(){
  $('.thumb').isotope({ filter: '*' });
})

$('.btn_web').click(function(){
  $('.thumb').isotope({ filter: '.web' });
})

$('.btn_mobile').click(function(){
  $('.thumb').isotope({ filter: '.mobile' });
})

$('.btn_motion').click(function(){
  $('.thumb').isotope({ filter: '.motion' });
})

$('.btn_award').click(function(){
  $('.thumb').isotope({ filter: '.award' });
})



//갤러리 플러그인
// $('.thumb').magnificPopup({
//   delegate: 'a', // child items selector, by clicking on it popup will open
//   type: 'image',
//   gallery: { //갤러리 설정
//     enabled:true
//   }
// });

