// [programmers - a와 b 출력하기](https://school.programmers.co.kr/learn/courses/30/lessons/181951)

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
  console.log(`a = ${Number(input[0])}`);
  console.log(`b = ${Number(input[1])}`);
});

/* Review
구조분해할당.
const [a, b] = line.split[""];
 */

// simply way
// const readline = require("readline");
// const rl = readline
//   .createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   })
//   .on("line", function (line) {
//     const [a, b] = line.split(" ");
//     console.log("a =", a);
//     console.log("b =", b);
//   });
