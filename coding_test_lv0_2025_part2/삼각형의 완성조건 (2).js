// [programmers - 삼각형의 완성조건 (2)](https://school.programmers.co.kr/learn/courses/30/lessons/120868?language=javascript)

// Solution
function solution(sides) {
  const [a, b] = sides;
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  const case1 = a + b - 1 - max;
  const case2 = max - (max - min);
  return case1 + case2;
}

/* Review
삼각형이 되기 위한 조건, 세 번째 변의 범위.
 */

// simple way
function solution(sides) {
  return Math.min(...sides) * 2 - 1;
}
