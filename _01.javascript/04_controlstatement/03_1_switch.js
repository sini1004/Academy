/**
switch : 정해진 범위안의 값에 대해 특정한 일을 해야하는 경우
 */

let day = 3; //숫자를 요일로 (0:월요일, 1:화요일, 2:수요일, ..., 6:일요일)
let dayName;

// if(day == 0){
//   dayName = '월요일';
// }else if(day == 1){
//   dayName = '화요일';
// }else if(day == 2){
//   dayName = '수요일';
// }else if(day == 3){
//   dayName = '목요일';
// }else if(day == 4){
//   dayName = '금요일';
// }else if(day == 5){
//   dayName = '토요일';
// }else if(day == 6){
//   dayName = '일요일';
// }

switch(day) {
  case 0 : 
    dayName = '월요일';
    break;
  case 1 : 
    dayName = '화요일';
    break;
  case 2 : 
    dayName = '수요일';
    break;
  case 3 : 
    dayName = '목요일';
    break;
  case 4 : 
    dayName = '금요일';
    break;
  case 5 : 
    dayName = '토요일';
    break;
  case 6 : 
    dayName = '일요일';
    break;
  default:
    console.log('해당하는 요일이 없어요!')
}

console.log(`오늘은 ${dayName} 입니다.`)


//조건 여러개 사용시

let aa = 'sick';
let text;

switch(aa){
  case 'okay' :
  case 'good' :
    text = '컨디션 굿!';
    break;
  case 'bad' : 
  case 'sick' : 
    text = '아파';
    break;
}

console.log(`오늘 컨디션은 ${text}`);