function fechEgg(chicken){
  // return new Promise((resolve, reject))
  return Promise.resolve(`${chicken} --> π₯`); //μ μ½λ λμ  μ€νν± λ©μλ resolve
}

function freyEgg(egg){
  return Promise.resolve(`${egg} -->π³`);
}

function getChicken(){
  return Promise.reject(new Error('μΉν¨μ κ°μ§κ³  μ¬ μ μμ!'))
  // return Promise.resolve(`πΎ --> π`);
}
// π₯π₯

// fechEgg('?')
// freyEgg('μ?')
getChicken()
.catch((error) => {
  console.log(error);
  return 'πΎ'
})
.then((bb) => { return fechEgg(bb) })
.then((cc) => { return freyEgg(cc) })
.then(console.log)
