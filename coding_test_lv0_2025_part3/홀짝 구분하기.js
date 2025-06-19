// [programmers - 홀짝 구분하기](https://school.programmers.co.kr/learn/courses/30/lessons/181944)

// Solution
const readline = require("readline");
const rl = readline
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", function (line) {
    const result = ["even", "odd"];
    console.log(`${line} is`, result[Number(line) % 2]);
  });

/* Review
홀짝 구분시, if문 외에 삼항 연산자 or 배열 활용.
 */

// other way
// const readline = require("readline");
// const rl = readline
//   .createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   })
//   .on("line", function (line) {
//     const result = Number(line) % 2 ? "odd" : "even";
//     console.log(line, "is", result);
//   });
