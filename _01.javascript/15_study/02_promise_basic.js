
const myPromis = new Promise((resolve,reject) => {
  //성공했을 떄 : resolve/ 실패했을 때 : reject (함수 파라미터로 받아옴)
  setTimeout(()=>{
    //resolve(1); //2초 뒤에 성공하는 프로미스
    reject(new Error()) //2초 뒤에 실패하는 프로미스
  },2000)
});

//프로미스가 끝나고 할 작업 설정
myPromis
  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.log(error);
  })