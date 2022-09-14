<<<<<<< HEAD
/**
return을 명시하지 않으면 undefined반환
 */

function add(a, b){
  a + b;
  
}
//return을 명시하지 않으면 undefined반환

const result = add(3, 5);

console.log('add함수 실행', result);


function write(tt){
  console.log('맛있는 새우튀김🍤', tt);
}
//특정한 일 수행하거나 반환하지 않는 함수는 return 생략 가능
write('good')

function print(num){
  if(num < 0){
    return; //undefined
    //조건에 맞으면 리턴으로 함수를 종료, return undefined의 축약
  }
  console.log(num)
}
=======
/**
return을 명시하지 않으면 undefined반환
 */

function add(a, b){
  a + b;
  
}
//return을 명시하지 않으면 undefined반환

const result = add(3, 5);

console.log('add함수 실행', result);


function write(tt){
  console.log('맛있는 새우튀김🍤', tt);
}
//특정한 일 수행하거나 반환하지 않는 함수는 return 생략 가능
write('good')

function print(num){
  if(num < 0){
    return; //undefined
    //조건에 맞으면 리턴으로 함수를 종료, return undefined의 축약
  }
  console.log(num)
}
>>>>>>> 92db50fe19709d7b82f5517ffacd8416648d1c89
print(12);