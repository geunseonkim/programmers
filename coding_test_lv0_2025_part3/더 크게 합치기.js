// [programmers - 더 크게 합치기](https://school.programmers.co.kr/learn/courses/30/lessons/181939)

// Solution
function solution(a, b) {
  const AB = String(a) + String(b);
  const BA = String(b) + String(a);
  const numAB = Number(AB);
  const numBA = Number(BA);
  return numAB > numBA ? numAB : numBA;
}

/* Review
가장 큰 수를 골라낼 수 있는 Math.max() 사용
템플릿 리터럴 (`${a}${b}`) 사용해서 심플한 코드 구현.
 */

// simple solution
function solution(a, b) {
  return Math.max(Number(`${a}${b}`), Number(`${b}${a}`));
}
