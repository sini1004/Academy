// 1. object shorthand assignment : key와 value가 같을 경우 생략 가능

let name = 'daivd';
let age = '20';

let yougman = {
  // name : name, //value 값을 위에서 받아옴(key,value가 같음.)
  // age : age
  name,
  age
}
console.log(yougman);



// 2. destructuring(디스트럭쳐링, 구조 분해 할당)
let cat = {
  name1 : 'nuri',
  age1 : '2',
  color : 'gold',
  house : 'street'
}

// let name1 = cat.name1;
// let color = cat['color'];

let {name1, color} = cat; //key값을 변수로 만들어 주고(선언), 오브젝트가 할당됨.

console.log(name1, color);



// 3. 2와 동일 - 배열에 적용
let array = [1,2,3,4,5]
let [first, second] = array; //배열에서 앞에 2개를 변수로 만들고 array배열을 할당함.

console.log(first, second);

let [a, b, ...rest] = array; //앞에 2개(a,b)를 제외한 나머지
console.log(rest);

let {house, ...rest2} = cat;
console.log(rest2);
//...rest



// 4. spread 문법
let dog = {name2 : 'coco', color2 : 'red', size : 'big'}

let dog2 = { ...dog};
let dog3 = dog;

console.log('dog2 - ', dog2);
console.log('dog3 - ', dog3);

dog = {color2 : 'red'}
// dog2 = {...dog, character : 'nice'}
console.log('color수정 - ', dog)
console.log('dog, dog2는 같아?', dog == dog2);
console.log('dog, dog3는 같아?', dog == dog3);



// 5. 삼항연산자
// 함수? a : b => true일때는 a, false일때는 b