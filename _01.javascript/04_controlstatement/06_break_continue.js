/**
<<<<<<< HEAD
반복제어 : break,continue
=======
break

continue
>>>>>>> 92db50fe19709d7b82f5517ffacd8416648d1c89
 */

for(let i = 0; i < 20; i++){

  if(i === 10){
    //continue; //continue를 만나면 무시하고 다음으로 넘어감.
    console.log('i가 10이 되었어요!');
    break; // break를 만나면 조건에 만족하고 끝남. (반복문 종료)
  }
  console.log(i);
}