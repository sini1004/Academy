const $btn = $('.nav li a'); //버튼역할하는 nav a를 변수로
$btn.click(function(){
  $btn.removeClass('active');
  $(this).addClass('active');
})

//isotope 사용
$('.thumb').isotope({
  // options
  itemSelector: '.all',
  stagger: 100, //시간차 두고 transition
  transitionDuration: '0.8s' //위치 또는 모양이 변경되거나 CSS 시간 형식으로 설정되거나 밀리초 단위의 숫자로 설정된 전환 기간
});

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
$('.thumb').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery: { //갤러리 설정
    enabled:true
  }
  // other options
  //type: 'image'
  // other options
});