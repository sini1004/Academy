/**
 * error 강제로 발생시킬 때는 throw
 * error 잡아낼 때는 try/catch
 */

function sleep(ms){
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  })
}

//에러 강제로 만들어서 확인해보기
async function  makeError(){
  await sleep(1000);
  const error = new Error();
  throw error;
}

//에러잡는거 추가 : try/catch
async function process(){
  try {
    await makeError();
  } catch(e){
    console.error(e);
  }
}

process();
