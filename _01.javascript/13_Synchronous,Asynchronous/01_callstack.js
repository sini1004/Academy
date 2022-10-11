// 동기적 - 하나씩 차근차근
// 응답을 기다림
// JavaScript는 동기식 언어이다.
// 자바스크립트는 한 번에 하나의 작업을 수행한다.

// 한 작업이 실행되는 동안 다른 작업은 멈춘 상태를 유지하고 자신의 차례를 기다리는 것을 말한다.

// 이러한 동작을 단일 스레드(싱글 스레드), 동기(Synchronous)라고 부른다.


function a(){         //호출4   //호출5  1반환후 함수 b()로 감  
  //for(let i = 0; i < 100000000; i++);
  return 1;
}
function b(){         //호출3   //호출6
  return a() + 1;
}
function c(){        //호출2    //호출7
  return b() + 1;
}

const result = c();  //호출1    -함수c()에서 반환된 값이 result로 들어와서 출력 
console.log(result);  