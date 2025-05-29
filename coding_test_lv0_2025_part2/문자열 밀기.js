// [programmers - 문자열 밀기](https://school.programmers.co.kr/learn/courses/30/lessons/120921?language=javascript)

// Solution
function solution(A, B) {
  if (A === B) return 0;

  let arr = A.split("");

  for (let i = 1; i <= A.length; i++) {
    let lastChar = arr.pop();
    arr.unshift(lastChar);

    if (arr.join("") === B) {
      return i;
    }
  }

  return -1;
}

/* Review
let a = "abc";
let b = "bca";

(b + b) = "bcabca";
(b + b).indexOf(a) → "abc"는 index 2에 있음 -> 2회 밀면 됨.
 */

// simple way
let solution = (a, b) => (b + b).indexOf(a);
