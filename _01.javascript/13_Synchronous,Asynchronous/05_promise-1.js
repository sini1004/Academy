function fechEgg(chicken){
  // return new Promise((resolve, reject))
  return Promise.resolve(`${chicken} --> 🥚`); //위 코드 대신 스태틱 메소드 resolve
}

function freyEgg(egg){
  return Promise.resolve(`${egg} -->🍳`);
}

function getChicken(){
  return Promise.reject(new Error('치킨을 가지고 올 수 없음!'))
  // return Promise.resolve(`🌾 --> 🐔`);
}
// 🐥🥚

// fechEgg('?')
// freyEgg('알?')
getChicken()
.catch((error) => {
  console.log(error);
  return '🌾'
})
.then((bb) => { return fechEgg(bb) })
.then((cc) => { return freyEgg(cc) })
.then(console.log)
