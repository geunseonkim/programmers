// [programmers - 가장 큰 수 찾기](https://school.programmers.co.kr/learn/courses/30/lessons/120899?language=javascript)

// Solution
function solution(array) {
  var answer = [];
  let max = Math.max(...array);
  let indx = array.indexOf(max);
  answer = [max, indx];
  return answer;
}

/* Review

Used Math.max() to find the largest number and indexOf to get its index
*/
function solution(array) {
  let max = Math.max(...array);
  return [max, array.indexOf(max)];
}
