// [programmers - 두 수의 연산값 비교하기](https://school.programmers.co.kr/learn/courses/30/lessons/181938)

// Solution
function solution(a, b) {
  return Math.max(Number(`${a}${b}`), 2 * a * b);
}

/* Review
더 크게 합치기.js 문제에서 simple way 코드를 활용해봄.
 */

// 신기했던 코드.
let num1 = parseInt(a + "" + b + ""); // a + "" => 숫자 a를 문자열로 변환.
// parseInt(): 정수 변환, Number(): 숫자 변환(더 명확)
