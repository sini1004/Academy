/*
산술연산자 + - * / % **
*/

let num1 = 5;
let num2 = 10;

console.log('num1+num2 : ', num1 + num2);
console.log('num1-num2 : ', num1 - num2);
console.log('num1*num2 : ', num1 * num2);
console.log('num1/num2 : ', num1 / num2);
console.log('num1%num2 : ', num1 % num2);
console.log('num1**num2 : ', num1 ** num2);


// + 연산자 주의점! 문자열+문자열, 숫자열+문자열 은 더하면 그냥 나열해줌.

let text = '빨간색' + '운동화';
console.log(text);

let text2 = 25 + '편의점'; //숫자열+문자열 ->문자열로 변환
console.log(text2);

//${변수} : 템플릿 문자열 /+(문자열결합연산자) 대신에 사용,, 백틱(백쿼드)``와 함께 사용

let subject, scroe;
subject = 'Javascript';
score = 95;
console.log(subject + '과목 성적은? ' + score + '점 입니다');






