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

//ligthbox2 플러그인 - 이미지 팝업
lightbox.option({
  'resizeDuration': 200, //리사이징 애니메이션 시간 ms단위
  'wrapAround': true, //세트 loop여부
  'fadeDuration': 600, //페이지 변환시 페이드 시간
  'positionFromTop': 100, //팝업 위치, 위에서부터 얼마나 떨어져 있나 (px)
  'showImageNumberLabel' : false //팝업하단 페이지 넘버 표시 유무
})