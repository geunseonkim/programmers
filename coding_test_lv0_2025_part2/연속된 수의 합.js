// [programmers - 연속된 수의 합](https://school.programmers.co.kr/learn/courses/30/lessons/120923?language=javascript)

// Solution
function solution(num, total) {
  // 처음 시작 숫자부터 찾기 위해서 전체 합을 구함 and 중간 숫자를 기준으로 계산.
  const middle = Math.floor(total / num); // 중간 숫자
  const start = middle - Math.floor((num - 1) / 2); // 시작 숫자

  const result = [];
  for (let i = 0; i < num; i++) {
    result.push(start + i);
  }
  return result;
}

/* Review
연속된 정수 num개를 더한 값이 total -> 연속된 정수의 중앙값 or 평균을 기준으로 앞 뒤로 나눠서 배열을 만듦.
*/

//simple way
function solution(num, total) {
  const start = total / num - (num - 1) / 2;
  return Array.from({ length: num }, (_, i) => start + i);
}

//another way
function solution(num, total) {
  var min = Math.ceil(total / num - Math.floor(num / 2));
  var max = Math.floor(total / num + Math.floor(num / 2));

  return new Array(max - min + 1).fill(0).map((el, i) => {
    return i + min;
  });
}
