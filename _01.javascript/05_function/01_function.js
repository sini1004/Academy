/*
함수 function : 특정한 일을 수행하는 코드의 집합
가독성, 재사용 가능, 유지보수성

==== 사용방법 ()소괄호 안에는 매개변수, Parameter, 인자(외부에서 전달받는)
1. 선언적 함수 - 일반
  function 함수명() {
    자바스크립트 코드들... (실행문)
  }
  함수명(); //위에서 정의한 함수 실행(호출)

2. 익명 함수, 함수 표현식 - 함수 이름이 없는 함수, 변수를 함수처럼 사용, 함수도 객체이기 때문에 가능
  변수명 =  function(){
    자바스크립트 코드들...
  }
  함수명(); //위에서 정의한 함수 실행(호출)

3. 즉시 실행 함수 - 선언과 동시에 실행, 재호출 불가
                  - 프런트엔드쪽에서 즉각적으로 실행할때 사용, 권장X
  (function () {
    자바스크립트 코드들... (statements)
  })()

  ++++ 함수명은 수행하는 일을 잘 나타낼 수 있는 이름
  ++++ 매개변수(인자) 이름도 의미있게
*/

function add(num1, num2) {
	const result = num1 + num2;
	return result;
}

console.log(add(1, 2));

//즉시 실행 함수
(function () {
	console.log("🏃🏻‍♀️");
});

function add(num1, num2) {
	const result = num1 + num2;
	return result;
}

console.log(add(1, 2));

//즉시실행 함수
(function () {
	console.log("🍗");
})();
