// [programmers - 문자열 출력하기](https://school.programmers.co.kr/learn/courses/30/lessons/181952)

// Solution
const readline = require("readline"); // Node.js가 제공하는 readline 모듈을 불러오기
const rl = readline.createInterface({
  // rl : 입력을 읽는 인터페이스.
  // 입출력 인터페이스를 만들어서 사용자 입력을 받을 준비를 함
  input: process.stdin, // "표준 입력". 사용자가 '키보드'로 입력하는 데이터를 읽어들임.
  output: process.stdout, // "표준 출력". '화면'(콘솔)에 출력하겠음.
});

let input = [];

rl.on("line", function (line) {
  // "line" 이벤트는 사용자가 한 줄 입력할 때마다 실행되는 콜백 함수를 등록하는 것.
  input = [line];
}).on("close", function () {
  // "close" 이벤트는 입력 종료 시 실행되는 콜백 함수를 등록하는 것.
  str = input[0];
  console.log(str);
});

/* Review

readline // Node.js에서 제공하는 표준 라이브러리(modules). Node.js 환경에서 터미널(콘솔)에서 사용자 입력을 읽기 위한 도구.
Node.js에서 on("이벤트명", 콜백함수)은 특정한 일이 발생했을 때 실행되는 함수를 등록함.
브라우저에서는 보통 prompt()를 씀.
 */

// 한 줄 입력을 출력.
// const readline = require("readline");
// const rl = readline
//   .createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   })
//   .on("line", console.log);

// readline 모듈에서 createInterface 메서드로 rl 객체를 만들고, 그걸 통해 사용자 입력을 처리.
// overall
// Node.js가 제공하는 readline 모듈을 불러옴. readline 모듈에서 createInterface 메소드로 rl 객체 생성. rl은 입력을 읽는 인터페이스(TV-리모컨).
// 입출력 인터페이스로 사용자의 입력을 받을 것: 표준 입력(사용자가 키보드에 입력하는 거), 표준 출력(화면(콘솔)에 출력하는 거).
// Node.js에서 on 함수 -> .on("이벤트명", 콜백함수)를 씀. "line" 이벤트로 사용자가 한 줄 입력할 때마다 실행되는 콜백함수를 등록, "close" 이벤트는 입력 종료시 실행되는 콜백함수 등록.
