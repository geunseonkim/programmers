// [programmers - 세균 증식](https://school.programmers.co.kr/learn/courses/30/lessons/120910?language=javascript)

// Solution
function solution(n, t) {
  var answer = n;
  for (let i = 1; i <= t; i++) {
    answer *= 2;
  }
  return answer;
}

/* Review
      simple and straightforward. nothing special.
  */

// 비트 연산자
function solution(n, t) {
  return n << t;
}

// 거듭제곱근
function solution(n, t) {
  return n * Math.pow(2, t);
}
