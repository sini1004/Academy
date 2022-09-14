/**
++++ 주어진 숫자만큼 0부터 나열하는 함수 => print
++++ 2배값 출력 => print2
 */

function iterate(max, action) {
  for(let i = 0; i < max; i++) {
    action(i);
  }
}

function print(num) {
  console.log(num);
}

function print2(num) {
  console.log('2배값 출력' ,num*2);
}

iterate(5, print);
iterate(10, print2);
