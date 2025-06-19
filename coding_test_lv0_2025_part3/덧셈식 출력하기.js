// [programmers - 덧셈식 출력하기](https://school.programmers.co.kr/learn/courses/30/lessons/181947)

// Solution
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  console.log(
    `${Number(input[0])} + ${Number(input[1])} =`,
    Number(input[0]) + Number(input[1])
  );
});

/* Review
input 값을 구조분해 할당 const [a, b] = line.split(" ")
 */

// other way
// const readline = require("readline");
// const rl = readline
//   .createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   })
//   .on("line", function (line) {
//     const [a, b] = line.split(" ");
//     console.log(a, "+", b, "=", Number(a) + Number(b));
//   });
