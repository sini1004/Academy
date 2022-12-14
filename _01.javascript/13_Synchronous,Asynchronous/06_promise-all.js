function getBanana(){
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('๐'), 3000);
  })
}

function getApple(){
  return new Promise((resolve) => {
    setTimeout(() => {resolve('๐')}, 1000);
  })
}

function getOrange(){
  // return new Promise((reject) => {
  //   reject(new Error('์ค๋ ์ง ์์ด์!'))
  // })
  return Promise.reject(new Error('์ค๋ ์ง๋ ์์ด์ใ ใ '))
}

//๋ฐ๋๋์ ์ฌ๊ณผ๋ฅผ ๊ฐ์ง๊ณ  ์์ ๋ฐฐ์ด๋ก
getBanana()
.then((aa) => getApple() 
  .then((bb) => { return [aa, bb]})
  )
.then(console.log); //3์ด + 1์ด = ์ด 4์ด ๊ฑธ๋ฆผ



//Promise.all : ํ๋ฒ์ ๋ชจ๋  Promise๋ค์ ์คํ
Promise.all([getBanana(),getApple()])
.then((fruits) => console.log('all : ', fruits)); //3์ด๊ฑธ๋ฆผ




// Promise.race : ์ฃผ์ด์ง Promise ๋ค ์ค์ ๊ฐ์ฅ ๋จผ์  ์ฒ๋ฆฌ๋๋ ๊ฒฐ๊ณผ ๋ฐํ
Promise.race([getBanana(),getApple()])
.then(fruit => console.log('race : ', fruit)); 


// Promise.all([getBanana(),getApple(),getOrange()])
// .then(fruits => console.log('all-error',fruits))
// .catch(console.log)



// Promise.allSettled : ์ฌ๋ฌ Promise๋ฅผ ๋์์ ์ฒ๋ฆฌ, ์คํจํ Promise๊ฐ ์์ด๋ ๋ฌด์กฐ๊ฑด ์คํ
// ๊ฐ Promise์ ์ํ์ ๊ฐ ๋๋ ์๋ฌ๋ฅผ ๋ฐ์ ์ ์์
Promise.allSettled([getBanana(),getApple(),getOrange()])
.then(fruits => console.log('allSettled',fruits))
.catch(console.log);




// getBanana()
// .then(console.log)
// .catch(console.error)
// .finally()