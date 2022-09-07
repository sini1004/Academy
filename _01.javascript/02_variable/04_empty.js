//null 과 nudefinde

console.log("-------------------null, undefined----------------");

let vari;
console.log(vari); //undefined 메모리상 어떤 데이터도 들어있지 않음.

console.log("--------------------------------------------------");
vari = null; //변수가 비었다고 선언
console.log(vari);

console.log("--------------------------------------------------");
let activI; //변수안에 내용이 있는지 없는지 모르는 상태
activI = null; //벼수 안 내용이 없는 상태
console.log(activI);

console.log(typeof null); //object
console.log(typeof undefined); //undefined
