// [programmers - 공배수](https://school.programmers.co.kr/learn/courses/30/lessons/181936)

// Solution
function solution(number, n, m) {
  return number % n === 0 && number % m === 0 ? 1 : 0;
}

/* Review
Simple and straightforward. nothing special.
 */

// 내가 실수한 부분.
function solution(number, n, m) {
  return +!(number % (n * m));
}
solution(12, 6, 8); // 기대값: 0 (12는 6의 배수지만, 8의 배수는 아님)
// 위의 테스트 케이스인 경우 성립하지 않는다.
// number가 "n과 m의 곱의 배수"인지 검사하는 게 아니라 number가 "n의 배수이면서 m의 배수"인지를 검사해야 함!

// 이 문제에서 단항 플러스 연산자를 쓰려면.
function solution(number, n, m) {
  return +!(number % n || number % m);
}
