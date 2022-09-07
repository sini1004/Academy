/**
(대소관계)비교연산자 Relational Operator
> < <= >= (부등호)
(일치연산자)
= : A=B => B를 A에 할당한다(대입)
= : A==B => 일치한다는 의미(타입은 구분 안함)
=== => 타입도 일치

*동등비교관계 연산자
!=   A != B => A와 B 같지 않을 때 true
!==   A !== B => A와 B가 type이 다를 때  true
 */

console.log('5는 7보다 큰가요? ', 5 > 7);
console.log('5는 7보다 작은가요? ', 5 < 7);
console.log('5는 7보다 크거나 같은가요? ', 5 >= 7);
console.log('5는 5보다 크거나 같은가요? ', 5 >= 5);

console.log('5는 5보다 크거나 같은가요? ', 5 >= 5);

// console.log('5와 5는 같은가요? ', 5 = 5); //대입연산자임. 같다는 의미가 아님!
console.log('5와 5는 같은가요? ', 5 == 5); //
console.log("5와 '5'는 같은가요? ", 5 == '5'); //문자열,숫자열 구분X : 일치

console.log("5와 '5'는 같은가요? === ", 5 === '5'); //
console.log("5와 '5'는 같은가요? === ", 5 === 5); //둘 다 숫자가 같으므로 true

console.log('4와 4는 다른가요?', 4 !== 4);
console.log('4와 4는 다른가요?', 4 !== '4'); //타입조차 다른거라서 true

console.log("강남구와 서초구는 다른가요? (부정형)", '강남구' != '서초구'); //



const obj1 = {name : 'js'}
const obj2 = {name : 'js'}

console.log('obj1과 obj2는 같은가요? == ', obj1==obj2); //메모리 주소가 다름
console.log('obj1:name과 obj2:name는 같은가요? == ', obj1.name==obj2.name); //ture

const obj3 = obj2;

console.log('obj3과 obj2는 같은가요? == ', obj3==obj2); //메모리 주소가 같음




