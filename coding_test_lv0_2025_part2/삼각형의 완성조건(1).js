// [programmers - 삼각형의 완성조건(1)](https://school.programmers.co.kr/learn/courses/30/lessons/120889?language=javascript)

// Solution
function solution(sides) {
  function sum(a, b, c) {
    return a + b + c;
  }
  let max = Math.max(...sides);
  let left = sum(...sides) - max;

  return max < left ? 1 : 2;
}

/* Review

  Spread operator expands arr into individual elements
  Reduce makes calc simpler
  */

function solution(sides) {
  let max = Math.max(...sides);
  let left = sides.reduce((acc, cur) => acc + cur, 0) - max;

  return max < left ? 1 : 2;
}
