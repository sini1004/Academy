/*
  - spread연산자의 사용 : 그룹이 된 상태의 아이템들을 하나하나 낱개로 풀어줌

  - 주어진 배열에서 중복 제거
*/


const food = ['🍕', '🍗', '🍤', '🥪', '🍜', '🍜', '🍕', '🍜', '🍤'];
console.log(...new Set(food)); //set은 중복을 허용하지 않음! (...은 일반 의미가 없는 데이터로 전환)
//console.log(...new Set(food));  => ... : 스프레드 연산자
console.log(food); 
console.log(...food); 

console.log('==================================');

//재사용 가능한 함수로
function delDD(array){
  // return [new Set(food)];
  // return new Set(food);
  return [...new Set(array)];
}
console.log(delDD(food));

//주어진 두 배열의 공통된 아이템만 담고 있는 세트를 만들기
const aa = new Set([1,2,3,4,5,7,8,9]);
const bb = new Set([1,2,3,8]);

function findInter(set1, set2){
  const array = [...set1].filter((item) => set2.has(item));
    return new Set(array);
}
console.log(findInter(aa, bb));

