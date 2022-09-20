//문자열을 한줄씩 출력

const text = 'Hello World!';

for(let i = 0; i < text.length; i++){
  console.log(text[i]);
}

console.log('=================================');

//1초에 한번씩 시간(날짜포함) 출력 [set Interval]
setInterval(() => {
  const now = new Date();
  console.log(now.toLocaleString());
},1000);
