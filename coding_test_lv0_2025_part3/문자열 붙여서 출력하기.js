// [programmers - 문자열 붙여서 출력하기](https://school.programmers.co.kr/learn/courses/30/lessons/181946)

// Solution
const readline = require("readline");
const rl = readline
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", function (line) {
    const [a, b] = line.split(" ");
    console.log(a + b);
  });

/* Review
코드 확장하기. -> 입력값의 개수에 상관없이 출력할 수 있는 코드 작성.
const strArr = line.split(" ")
console.log(strArr.join(""))
 */

// other way
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// }).on('line', function (line) {
//     const strArr = line.split(' ')
//     console.log(strArr.join(''))
// })
