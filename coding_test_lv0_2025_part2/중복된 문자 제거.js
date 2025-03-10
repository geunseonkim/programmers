// [programmers - 중복된 문자 제거](https://school.programmers.co.kr/learn/courses/30/lessons/120888?language=javascript)

// Solution
function solution(my_string) {
  var answer = "";
  for (let i = 0; i < my_string.length; i++) {
    if (!answer.includes(my_string[i])) {
      answer += my_string[i];
    }
  }
  return answer;
}

/* Review

Instead of removing duplicates, just add chars that aren't repeated
Use Set to handle duplicates automatically
*/

function solution(my_string) {
  return [...new Set(my_string)].join("");
}
