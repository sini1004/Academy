/**
Math
 */

console.log(Math.PI);
console.log('절대값 : ', Math.abs(-152.8)); //마이너스를 없애줌
console.log('소수점 이하를 내림 : ', Math.floor(4.246853));
console.log('소수점 이하를 올림 : ', Math.ceil(1.246853));

console.log('반올림 : ', Math.round(1.581));
console.log('반올림 : ', Math.round(1.481));
console.log('정수만 반환(소수점 이하 버림) : ', Math.trunc(-3.481));

console.log('최대값을 반환 : ', Math.max(5,34,126,68));
console.log('최소값을 반환 : ', Math.min(5,34,126,68));

console.log('9의 제곱근은? : ', Math.sqrt(9));

console.log('============================================');

console.log('랜덤값을 반환 : ', Math.random());
console.log('랜덤값을 반환(1~10) : ', Math.random()*10);
console.log('랜덤값을 소수점 이하 : ', Math.floor(Math.random()*10+1));
//랜덤값에 10을 곱하면 0.xxx ~ 9.xxx 사이의 수가 랜덤으로 나온다 +1 해줌

console.log('랜덤값을 반환(0~3)', Math.floor(Math.random()*4));