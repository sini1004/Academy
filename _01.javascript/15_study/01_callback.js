function increaseAndPrint(n, callback){
  //setTimeout()함수 : 어떤 코드를 바로 실행하지 않고 일정 시간 기다린 후 실행해야하는 경우
  setTimeout(()=>{
    let increased = n+1;
    console.log(increased);

    if(callback){
      callback(increased)
    }

  },2000);
}

increaseAndPrint(0, n => {
  increaseAndPrint(n, n => {
    increaseAndPrint(n, n => {
      increaseAndPrint(n, n => {
        increaseAndPrint(n, n => {
          console.log('끝!');
        });
      });
    });
  });
});