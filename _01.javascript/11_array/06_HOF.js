/**
  == 배열을 사용하는 함수들 ==
  일급함수(first-class function) - 일반 객체(변수)처럼 사용
  고차함수(HOP : Higher-Order Function) - 다른 함수를 인자로 받거나 반환 / 함수를 매개변수(Parameter)로 사용하거나 함수를 반환하는 함수

  절차형이 아닌 함수들끼리 엮어 놓음
 */

const fruits = ['🍌', '🍉', '🍒', '🍏']

// for(let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }


// .forEach() : for문을 대체하는 고차 함수. (고차함수 forEach 사용)
// 배열을 돌면서 원하는 일(=함수호출/콜백함수) 작동.
// 반복문을 추상화하여 구현된 메서드이고 내부에 주어진 배열을 순회하면서 연산을 수행
/*
  AA.forEach((item,index,thisArr)=>{});
  item : 배열요소값
  index : 배열 인덱스
  thisArr : 참조한 배열(배열 전체)

  리턴값 : 없음
*/
fruits.forEach(function(aa, bb, cc){
  console.log(aa, bb, cc);
  console.log(aa);
  console.log(bb);
  console.log(cc);
});
fruits.forEach((vv) => {
  console.log(vv);
});


const item1 = { name:'🍔', price:2500 };
const item2 = { name:'🍩', price:1000 };
const item3 = { name:'🍰', price:4000 };
const products = [item1, item2, item3, item2, item2];

// 도넛을 찾을꺼야
// find() : 주어진 배열을 순회하면서 콜백 함수 실행의 반환값이 true에 해당하는 첫번째 요소를 반환
let found1 = products.find(function(value){
  return value.name == '🍰';
});

let found2 = products.find((value) => { //축약
  return value.name == '🍩';
});

// findIndex() : 배열 메소드 indexOf()의 콜백함수 버전.
let found3 = products.findIndex((value) => value.name == '🍔');

console.log('케이크찾음!', found1);
console.log('도넛찾음!', found2);
console.log('햄버거의 인덱스값?', found3);

// some() : 배열 메소드인 include()의 콜백함수 버전.
// 함수(조건)에 부합한 갯수가 some이면 true, 아니면 false, 화살표 함수로!
let result = products.some((value) => value.name == '🌭');
console.log('핫도그가 하나라도 있나?', result);//실행구가 1개일때는 {} 생략가능. return필요없음.

// every() : some()의 반대버전
// 배열의 모든게 같은지 확인
result = products.every((value) => value.name == '🍩');
console.log('전부 도너츠?', result);

// filter() : 조건에 맞는 아이템을 새로운 배열로 생성하여 반환.
result = products.filter((value) => value.name == '🍩');
console.log('도너츠가 들어있는 모든 아이템?', result);


console.log('===========================================');

const nums = [1, 2, 3, 4, 5];

// map() : 배열의 아이템을 각각 다른 아이템으로 매핑. 새로운 배열 생성
result = nums.map(function(item){
  return item*2;
});
console.log('map을 이용해봅시다', result);

result = nums.map(function(item){ //짝수인 경우만 2배로 매핑
  if(item % 2 === 0){
    return item*2; //짝수인거
  } else {
    return item; //홀수인거 (홀수는 그대로 출력)
  }
});
console.log('2로 나눈 값이 0일때 곱하기 2해줘 ', result);


result = nums.map((item) => ['🍕','🥤'] );
console.log('?????????', result);


// flatMap() : 충첩된 배열을 낱개로 만들어서 새로운 배열로 생성
result = nums.flatMap((item) => ['🍕','🥤'] );
console.log('????', result);

result = nums.flatMap((item) => ['🥦','🥒'] );
console.log('flatMap 이용해봅시다', result);
//flatMap : 중첩된 배열을 낱개로 만들어서 새로운 배열로  


//응용
result = ['sunday', 'morning'].map((ttt) => ttt.split(''));
console.log('문자열 배열을 map', result);
// [[ 's', 'u', 'n', 'd', 'a', 'y' ],['m', 'o', 'r','n', 'i', 'n','g']]

result = ['blue', 'ocean'].flatMap((ttt) => ttt.split(''));
console.log('문자열 배열을 flatMap', result);
// 알파벳 하나씩 배열값으로


// sort() : 배열의 아이템들을 정렬
// 문자열 형태의 오름차순(1,2,3,4...., a,b,c...)으로 요소를 정렬
// 기존의 배열을 변경(새로만드는거 x)
const texts = ['zoo', 'hi', 'abc'];
texts.sort();
console.log('sort를 호출', texts);  //알파벳 순서대로 오름차순

const numbers = [ 10, 8, 5, 1, 15, 3];
numbers.sort();
console.log('numbers배열을 sort', numbers); //문자열 형태로 10이 5보다 먼저 나옴

numbers.sort((a,b) => a-b);
console.log('(a,b) => a-b 이용해서  sort', numbers);





