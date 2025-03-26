// [programmers - 약수 구하기](https://school.programmers.co.kr/learn/courses/30/lessons/120897?language=javascript)

// Solution
function solution(n) {
  var answer = [];
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      answer.push(i);
    }
  }
  return answer;
}

/* Review
    Simple and straightforward. nothing special.
  */
