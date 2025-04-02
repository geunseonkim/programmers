// [programmers - n의 배수 고르기](https://school.programmers.co.kr/learn/courses/30/lessons/120905?language=javascript)

// Solution
function solution(n, numlist) {
  var answer = [];
  for (let i = 0; i < numlist.length; i++) {
    if (numlist[i] % n === 0) {
      answer.push(numlist[i]);
    }
  }
  return answer;
}

/* Review
  
    Use filter to simplify the code. It directly returns a new array with ele that meet the condition 
  */
function solution(n, numlist) {
  return numlist.filter((num) => num % n === 0);
}
