// [programmers - 제곱수 판별하기](https://school.programmers.co.kr/learn/courses/30/lessons/120909?language=javascript)

// Solution
function solution(n) {
  return Math.sqrt(n) % 1 === 0 ? 1 : 2;
}

/* Review
    use Math.sqrt to distinguish if it's square num
    simple and straightforward. nothing special.
*/
