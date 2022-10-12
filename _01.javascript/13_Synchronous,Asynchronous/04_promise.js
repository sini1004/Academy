/*
  promise
    - 콜백이 중첩(callback hell)이 해결하기 위해
    - 가독성을 높이고, 에러처리를 쉽게 할 수 있게
    - 비동기적으로 수행하는 작업의 결과를 알려줌

    3가지 상태를 가짐
    대기(pending) : 초기 상태, 이행하지도 거부하지도 않은 상태
    이해(fulfilled) : 작업이 성공적으로 완료
    거부(rejected) : 작업실패
*/


function runDelay(bb) { 
  return new Promise((resolve, reject) => {
    if(!bb || bb < 0){
      reject(new Error('bb는 없거나 0보다 작다'));
    }
    setTimeout(resolve, bb * 1000);
  });
}
//resolve : 실행구(성공했을 때) .then 호출
//reject : 에러 발생 시 에러 객체를 나타내는 error와 함께 호출 .catch 호출

runDelay(-2)
.then(() => { console.log('타이머 완료')})
.catch(console.error)
.finally(() => console.log('끝!!!'))

/*
.then(필요한 일을 수행)
.catch(에러처리)
.finally(최종적으로)
*/

