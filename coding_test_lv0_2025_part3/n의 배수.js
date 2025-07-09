// [programmers - n의 배수](https://school.programmers.co.kr/learn/courses/30/lessons/181937)

// Solution
function solution(num, n) {
  if (num % n === 0) {
    return 1;
  } else {
    return 0;
  }
}

/* Review
Simple and straightforward. nothing special.
 */

// 신기했던 코드.
function solution(num, n) {
  return +!(num % n);
}
// 단항 플러스 연산자
// +true      // 1   (불리언 true → 숫자 1)
// +false     // 0   (불리언 false → 숫자 0)
// +null      // 0   (null → 0)
