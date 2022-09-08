/**
반복문 loop statment

for(초기화식(변수선언문); 종료 조건(조건식); 증감식){
  //실행할 코드

실행순서 : 
  1. 변수 선언문
  2. 조건식이 참이면 {} 실행할 코드 수행
  3. 증감식 
}
 */

for(let i = 0; i < 5; i++){
  //실행할 코드
  //console.log(i);
}

//중첩
for(let i = 0; i < 5; i++){
  for(let j = 0; j < 5; j++){
    console.log(`i는 ${i}, j는 ${j}`);
  }
}


