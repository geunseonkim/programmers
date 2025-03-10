// [programmers - 배열 원소의 길이](https://school.programmers.co.kr/learn/courses/30/lessons/120854?language=javascript)

// Solution
function solution(strlist) {
  var answer = [];
  for (let i = 0; i < strlist.length; i++) {
    answer.push(strlist[i].length);
  }

  return answer;
}

/*
Review

map makes the code cleaner and more intuitive
No major perf btw map and for loop on small datasets
Consider high-order funcs for better code efficiency
*/

function solution(strlist) {
  return strlist.map((i) => i.length);
}
