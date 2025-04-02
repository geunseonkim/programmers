// [programmers - 자릿수 더하기](https://school.programmers.co.kr/learn/courses/30/lessons/120906?language=javascript)

// Solution
function solution(n) {
  return Array.from(String(n), Number).reduce((acc, cur) => acc + cur, 0);
}

/* Review
    
Using Array.from is slightly more efficient than other methods
*/

function solution(n) {
  return n
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);

  //   return [...String(n)].map(Number).reduce((acc, cur) => acc + cur, 0);

  //   let answer = 0;
  //   for (let ele of String(n)) {
  //     answer += Number(ele);
  //   }
  //   return answer;
}
