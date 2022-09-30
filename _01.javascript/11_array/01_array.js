// 배열 생성 방법

let array1 = new Array(3); //Array객체를 이용, 3개를 저장할 수 있는 배열 생성
console.log(array1);

let array2 = new Array(1,2,3); //Array객체를 이용, 실제 아이템을 전달해서 생성
console.log(array2);

let array3 = Array.of(1,2,3); //스태틱함수 이용
console.log(array3);

let array4 = [1,2,3,4,5] //배열 리터럴 이용(구체적인 값을 가지고 배열을 생성)
console.log(array4);

let array5 = Array.from(array4); //기존 배열로 부터 새로운 배열로 만듬
console.log('array5는? ', array5);

let array6 = Array.from('Friday'); //iterable(순회, 반복이 가능), 배열, 문자열을 가르킴
console.log('array6는? ',array6); //문자 하나하나가 배열의 아이템

/*
  배열 - 동일한 메모리 크기를 가지며, 연속적으로 이어져 있어야한다.
  자바스크립트는 예외, 오브젝트와 거의 같음!
  순서가 있는 컬렉션을 저장할 때 쓰는 자료구조인 배열을 사용
*/





//오브젝트로부터 배열을 만듦

let array7 = Array.from({
  0: '안',
  1: '녕',
  2: '히',
  3: '히',
  length:4, }
)
console.log('array7은? ',array7);