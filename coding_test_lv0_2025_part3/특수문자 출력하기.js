// [programmers - 특수문자 출력하기](https://school.programmers.co.kr/learn/courses/30/lessons/181948)

// Solution
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("close", function () {
  console.log("!@#$%^&*(\\'\"<>?:;");
});

/* Review

정규식에서 특수문자는 의미있는 기호 -> 문자 자체로 출력하거나 검색하려면 이스케이프를 해줘야 함. -> 백슬래쉬(\)를 앞에 붙여줌.
\, ', " -> 이스케이프 필요.
*/

// 백틱(`)으로 감싸면 js 템플릿 리터럴 문법이 적용돼서 일반따옴표 ', "는 escape할 필요가 없음. (\ : 이스케이프 문자)
console.log(`!@#$%^&*(\\'"<>?:;`);
