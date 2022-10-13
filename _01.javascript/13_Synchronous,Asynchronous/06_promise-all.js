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
  // return new Promise((reject) => {
  //   reject(new Error('오렌지 없어요!'))
  // })
  return Promise.reject(new Error('오렌지는 없어요ㅠㅠ'))
}

//바나나와 사과를 가지고 와서 배열로
getBanana()
.then((aa) => getApple() 
  .then((bb) => { return [aa, bb]})
  )
.then(console.log); //3초 + 1초 = 총 4초 걸림



//Promise.all : 한번에 모든 Promise들을 실행
Promise.all([getBanana(),getApple()])
.then((fruits) => console.log('all : ', fruits)); //3초걸림




// Promise.race : 주어진 Promise 들 중에 가장 먼저 처리되는 결과 반환
Promise.race([getBanana(),getApple()])
.then(fruit => console.log('race : ', fruit)); 


// Promise.all([getBanana(),getApple(),getOrange()])
// .then(fruits => console.log('all-error',fruits))
// .catch(console.log)



// Promise.allSettled : 여러 Promise를 동시에 처리, 실패한 Promise가 있어도 무조건 실행
// 각 Promise의 상태와 값 또는 에러를 받을 수 있음
Promise.allSettled([getBanana(),getApple(),getOrange()])
.then(fruits => console.log('allSettled',fruits))
.catch(console.log);




// getBanana()
// .then(console.log)
// .catch(console.error)
// .finally()