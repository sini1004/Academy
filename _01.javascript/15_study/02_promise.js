function increaseAndPrint(n){
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      let value = n+1;
      console.log(value);

      if(value === 5) {
        const aa = new Error();
        aa.name = '5가 되었을 때 Error';
        reject(aa);
        return;
      }

      resolve(value);

    }, 2000)
  })
}

increaseAndPrint(0)
  .then(increaseAndPrint)
  .then(increaseAndPrint)
  .then(increaseAndPrint)
  .then(increaseAndPrint)
  .catch((e) => console.error(e))

  /**
   * 아쉬운 점 : 몇번째에서 에러 발생한지 모름.
   * 특정 조건에 따라 분기를 나누는 작업도 어려움.
   * 특정 값을 공유해가면서 작업 처리하기도 힘듬.
   * then이 너무 중복됨.
   * => async/await 
   */