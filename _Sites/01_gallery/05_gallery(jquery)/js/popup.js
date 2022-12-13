
const bigs = [
  'img/big/img01_big.png',
  'img/big/img02_big.png',
  'img/big/img03_big.png',
  'img/big/img04_big.jpeg',
  'img/big/img05_big.jpeg',
  'img/big/img06_big.jpeg',
  'img/big/img07_big.png',
  'img/big/img08_big.jpeg'
]

const $thumBtn = $('.thumb>li'); //썸네일 버튼
//썸네일 클릭 시
$thumBtn.click(function(e){
  e.preventDefault();
  let num = $(this).index();
  $('#modal').css({'display':'flex'});
  $('#modal').find('img').attr('src', bigs[num]);

  let aa = $(this).find('.title').html(); //클릭한 li 안의 title에 있는 내용
  let bb = $(this).find('.type').text();
  console.log(aa);
  console.log(bb);
})

$('#modal').click(function(){
  $(this).hide();
})