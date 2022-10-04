/*
  얕은 복사 Shallow Copy
*/

//오브젝트 만들기
const pizza  = { name : '🍕', price : 1500 };
const hamburg  = { name : '🍔', price : 4500 };
const hotdog  = { name : '🌭', price : 1000 };

//배열을 이용해서 가게 만들기
const store1 = [ hamburg, hotdog];

console.log('store1 ', store1);

const store2 = Array.from(store1);
//Array에 있는 스태틱 함수 from을 이용해 새로운 함수
console.log('store1 ', store1);
console.log('store2 ', store2);

store2.push(pizza);
console.log('store2에 pizza 추가 후 store1 ', store1);
console.log('store2에 pizza 추가 후 store2 ', store2);
//서로 다른 배열이 만들어졌다는 것을 확인


store1.push(pizza);
console.log('store2에 pizza 추가 후 store1 ', store1);
console.log('store2에 pizza 추가 후 store2 ', store2);
//store1에 추가했을때는 store2 바뀌지 않는다. -> 서로 다른 배열이 만들어졌다는 것을 확인 배열 store1만 pizza 추가


pizza.price = 2500;
console.log('pizza 가격 수정 후 store1 ', store1);
console.log('pizza 가격 수정 후 store2 ', store2);
//오브젝트를 바꾸니 배열은 수정하지 않았어도 자동으로 바뀜 -> shallow copy