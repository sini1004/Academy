/**
인자(인수 parameters)
 */

function add(a, b, c) {
  console.log(arguments); //전달된 인자 정보를 출력해주는 프로퍼티
  console.log('첫번째 인자 찾아와 : ', arguments[0]);
  console.log('두번째 인자 찾아와 : ', arguments[1]);
  console.log('세번째 인자 찾아와 : ', arguments[2]);
  return a + b;
}

add(5, 6, 7);

function add2(a, b) {
  console.log(arguments);
  console.log('함수 add2 : ',a + b);
}

add2(); //NaN 
// add2(2, 2);


//매개변수에 기본값을 설정할 수 있음. defalut parameters
function add3(a = 1, b = 3) {
  console.log(arguments);
  console.log('함수 add3 : ', a + b);
}

add3();
add3(5, 5);



function sum(...nnn) {
  console.log('인자 몇개를 받을 지 모르겠음. ', nnn);
}

sum(1,2,3,4,5,6,7,8);