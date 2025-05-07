// [programmers - 숨어있는 숫자의 덧셈 (2)](https://school.programmers.co.kr/learn/courses/30/lessons/120864?language=javascript)

// Solution
function solution(my_string) {
  var answer = 0;
  let strs = my_string.split(/[a-zA-Z]/g);
  for (let str of strs) {
    answer += Number(str);
  }
  return answer;
}

/* Review
 */

// 다른 풀이
function solution(my_string) {
  return my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);
}
