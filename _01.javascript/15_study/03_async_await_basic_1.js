/**
 * promise 사용 시 .then 필요없음
 * promise 더욱 쉽게 사용
 */

function sleep(ms){
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  })
}

async function process(){
  console.log('안녕하세요.');
  await sleep(1000);
  console.log('반갑습니다.');
  return true;
}
process()
  .then((bb)=>console.log(bb))
