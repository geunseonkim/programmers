// [programmers - 문자열 돌리기](https://school.programmers.co.kr/learn/courses/30/lessons/181945)

// Solution
const readline = require("readline");
const rl = readline
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", function (line) {
    const strArr = line.split("");
    console.log(strArr.join("\n"));
  });

/* Review

\n  ==> newline or line break 엔터 누르면 생기는 줄바꿈이랑 같음.
 */

// other way
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = [];

// rl.on("line", function (line) {
//   input = [line];
// }).on("close", function () {
//   str = input[0];
//   [...str].forEach((c) => console.log(c)); // forEach로 하나씩 출력.
// });
