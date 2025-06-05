// [programmers - 문자열 반복해서 출력하기](https://school.programmers.co.kr/learn/courses/30/lessons/181950)

// Solution
const readline = require("readline");
const rl = readline
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", function (line) {
    [str, n] = line.split(" ");
    // (1)
    // let result = [];
    // for (i=1; i<=Number(n); i++) {
    //     result.push(str)
    // }
    // console.log(result.join(""))

    // (2)
    console.log(str.repeat(Number(n)));
  });

/* Review
문자열 메소드 repeat 사용.
 */

// other way
str = "";
n = Number(input[1]);
for (let i = 0; i < n; i += 1) {
  str += input[0];
}
console.log(str);
