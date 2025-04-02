// [programmers - 문자열안에 문자열](https://school.programmers.co.kr/learn/courses/30/lessons/120908?language=javascript)

// Solution
function solution(str1, str2) {
  return str1.includes(str2) ? 1 : 2;
}

/* Review
    Simple and straightforward. nothing special.
*/

function solution(str1, str2) {
  return str1.split(str2).length > 1 ? 1 : 2;
}
