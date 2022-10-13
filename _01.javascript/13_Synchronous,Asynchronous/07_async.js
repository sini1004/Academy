/*
  Promise의 then을 사용하면 중복으로 배치되고 코드가 복잡해진다
    => 이것을 깔끔하게 해주는
    async
    : 비동적인 코드들이 동기적(절차적)으로
*/
function getBanana(){
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('🍌'), 3000);
  })
}

function getApple(){
  return new Promise((resolve) => {
    setTimeout(() => {resolve('🍎')}, 1000);
  })
}

function getOrange(){
  return Promise.reject(new Error('오렌지는 없어요ㅠㅠ'))
}

//바나나와 사과를 가지고 와서 배열로
// getBanana()
// .then((aa) => getApple() 
//   .then((bb) => { return [aa, bb]})
//   )
// .then(console.log); //3초 + 1초 = 총 4초 걸림



async function fetchFruits(){ //async 사용하면 비동기, promise가 호출, 내부를 동기적인 코드로 작성 가능하게 함
  const banana = await getBanana();
  const apple = await getApple();

  return [banana, apple];
}

fetchFruits()
.then(console.log)

