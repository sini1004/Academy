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
  .then((n) => {
    console.log('value : ', n)
  })