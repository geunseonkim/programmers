// [programmers - 한 번만 등장한 문자](https://school.programmers.co.kr/learn/courses/30/lessons/120896?language=javascript)

// Solution
function solution(s) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      answer += s[i];
    }
  }
  return answer.split("").sort().join("");
}

/* Review
  
s.indexOf(s[i]) === s.lastIndexOf(s[i])
answer.split("").sort().join("")

Used indexOf and lastIndexOf to check if a character appears only once in the string
Used split to convert string to array for sorting
*/

function solution(s) {
  let answer = [];
  for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) answer.push(c);
  return answer.sort().join("");
}
