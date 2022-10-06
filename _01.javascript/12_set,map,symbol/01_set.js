/*
  set : 정보의 집합
  배열과 달리 순서(index)가 없음, 아이템 중복 불가
*/

const set1 = new Set(); //set생성
console.log(set1); //=> set(0){}

const set2 = new Set(['하늘', '바다','산']); //set생성
console.log(set2); //=> set(3){1,2,3}
console.log('set의 아이템 숫자 확인', set2.size);
console.log('set의 아이템 존재 확인', set2.has(2));
console.log('set의 아이템 존재 확인', set2.has(6));
set2.forEach((bb) => console.log(bb));

const set3 = new Set('hello'); //set생성
console.log(set3); //=> Set(4) { 'h', 'e', 'l', 'o' }
set3.forEach((aa) => console.log(aa));


//순회
set2.forEach((aa) => console.log('forEach사용',aa));
for(const bb of set2.values()){
  console.log('for of 사용',bb)
}

//추가
set2.add(1004);
console.log('1004 추가',set2);
set2.add(1004);
console.log('1004 또 추가',set2);  //아이템 중복 불가

//삭제
set2.delete('바다');
console.log('바다 삭제',set2);

//전부삭제
set2.clear();
console.log('전부 삭제',set2);


//오브젝트
const obj1 = { name:'🍔', price:2500 };
const obj2 = { name:'🍩', price:1000 };
const objs = new Set([obj1, obj2]);

console.log('objs?', objs);

obj1.price = 1700;
console.log('obj1가격 인하', obj1);
console.log('obj1가격 인하 objs?',objs);
//shallow copy - 세트도 바뀜


const obj3 = { name:'🥤', price:500 };
objs.add(obj3);
console.log('objs 추가?', objs);
// console.log('objs 전체 나열', objs.entries());
// objs.delete(obj3);
// console.log('objs 삭제?', objs);

console.log('entries????', objs.entries());