/*
  for... of / spread
  이터레이션 프로토콜(인터페이스) - 반복, 순회 함수, 문법
  이터러블 - 반복이 가능한 객체, 이터레이션 프로토콜을 준수한 객체 (iterator를 리턴하는 [Symbol.iterator]() 를 가진 값)
  이터레이션
  이터레이터 

  이터레이션(Iteration)의 사전적 의미 : 반복
  -- for() 문의 반복 개념과 차이 있음 
  (배열은 반복 가능한 객체(object)입니다. 반복이 가능하다는 것은 iterable이라고 부르기도 합니다.)
*/


//for(변수) of(배열) {실행문...}
//배열은 순회가 가능, for of 사용
const arr1 = ['하늘', '산', '태평양'];
for(const item of arr1.keys()){
  console.log(item);
}
//arr1.keys() => 0 1 2

/*
const obj = { a: 1, b: 2 };
for (const item of obj) {
  console.log(item);
}
*/
// TypeError: obj is not iterable : 오브젝트는 이터러블이 아님


const itrt = arr1.values();
console.log('첫번째 : ', itrt.next()); //다음값을 반환
//{value : '하늘'. done:false}
//done : 끝났는지 아닌지 (boolean)

console.log('두번째 : ', itrt.next());
console.log('세번째 : ', itrt.next().value); 
console.log('네번째 : ', itrt.next());
console.log('반복끝? : ', itrt.next().done);

console.log('====================================');

//while이용
//while문 사용하는 경우 : 무한루프나 특정 조건에 만족할 때까지 반복해야 하는 경우(주로 파일을 읽고 쓰기에 많이 사용)
const itrt2 = arr1.values();
console.log(itrt2);
while(true){
  const item = itrt2.next();
  if(item.done) break;
  console.log(item.value);
}



//https://bbaktaeho-95.tistory.com/79