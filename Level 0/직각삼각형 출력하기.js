// (1)
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = [];

// rl.on("line", function (line) {
//   input = line.split(" ");
// }).on("close", function () {
//   const n = Number(input[0]);

//   let startStr = "";
//   for (let i = 0; i < n; i++) {
//     startStr += "*";
//     console.log(startStr);
//   }
// });

// (2)
const readline = require("readline"); // readline을 통해 표준 입력과 출력값을 처리. (readline 인터페이스 설정.)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = []; // input 배열에 사용자의 입력을 저장.

rl.on("line", function (line) {
  // line 이벤트 핸들러: 줄바꿈 즉, Enter를 누를 때마다 이벤트가 발생.
  input = line.split(" "); // 문자열을 공백으로 분리하고 배열로 변환. -> input 변수에 저장. 따라서 input은 사용자가 입력한 값을 공백으로 구분하여 각 요소가 문자열인 배열이 됨.
}).on("close", function () {
  // close 이벤트 핸들러: 입력이 종료되면 solution 함수 실행, input 배열의 첫 번째 요소를 숫자로 변환해서 전달.
  solution(Number(input[0]));

  function solution(n) {
    for (let i = 1; i <= n; i++) {
      console.log("*".repeat(i));
    }
  }
});

// (3)
// 입력을 배열로 처리하는 대신, 숫자 하나만 받는 방식
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.on('line', function (line) {
//     const input = Number(line);
//     solution(input)
//     rl.close()
// })

// function solution(n) {
//     for(let i = 1; i <= n; i++) {
//         console.log("*".repeat(i))
//     }
// }
