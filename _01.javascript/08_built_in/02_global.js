/**
global - 특정 객체에 속하지 않는 프로퍼티와 매서드, 최상위 객체

  - 오브젝트를 통하지 않고 바로 호출 가능, 프로그램이 꼬일 수 있으 자제
 */

  console.log(globalThis); //node에서 사용할 수 있는 글로벌 객체
  console.log(this); //모듈에 있는 정보를 출력

  eval('const num = 2; console.log(num)');
  //문자열 형식으로 작성하면 값으로 평가해서 출력

  console.log(isFinite(1)); //숫자가 유한인지 아닌지 확인
  console.log(isFinite(Infinity)); //숫자가 유한인지 아닌지 확인

  
  console.log('숫자: ', 65.5345); 
  console.log('문자 : ', '65.2543'); //숫자지만 문자열

  console.log(parseInt('65.2543'));
  console.log(parseInt('-12.3242')); //문자열이지만 숫자(실수) : 소숫점 아랫자리 절삭

  console.log(parseFloat('132.22')); //문자열이지만 숫자가 있으면 숫자로 변환

  //URI (Uniform Resource Identifier, 인터넷식별자) > url
  //아스키 문자로만 구성 되어야 함
  //한글이나 특수문자는 이스케이프 처리한다

  const URL = 'http://네이버.com';
  const enURL = encodeURI(URL); //아스키 문자로 전화(인코딩)
  console.log(enURL);

  const deURL = decodeURI(URL); 
  console.log(deURL);
  

  