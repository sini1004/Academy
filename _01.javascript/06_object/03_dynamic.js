/**

 */

const obj = {
  name : '누리',
  age : 4, 
}
const obj1 = {
  name : '삼식이',
  age : 10, 
}

//코딩하는 시점, 정적으로 접근이 확정
console.log(obj);
console.log(obj.name);  //value 값을 얻을 수 있다.

obj.name = '나비'; //value 값 수정
console.log('obj에 name 값 변경 => ', obj);

obj.color = 'cheese'; //key, value 값 추가
console.log('obj에 color 키 추가 => ', obj);


//동적으로 속성에 접근하고 싶을때는 대괄호 표기법 사용
function getValue(obj, key) {
  return obj[key]; // key가 뭔지 몰라서 작동하지 않음.
}

console.log(getValue(obj, 'name'));

//동적으로 추가
function addKey(aa, bb, cc) {
  //aa.bb = 'cc';
  aa[bb] = cc;
}

addKey(obj, 'kind', 'cat'); //오브젝트이름, 키값, 밸류
addKey(obj, 'charactor', 'crazy');
console.log(obj);

