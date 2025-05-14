// [programmers - 저주의 숫자 3](https://school.programmers.co.kr/learn/courses/30/lessons/120871?language=javascript)

// Solution
function solution(n) {
  let num = 0;
  let count = 0;

  while (count < n) {
    num++;
    if (num % 3 === 0 || num.toString().includes("3")) {
      continue;
    }
    count++;
  }
  return num;
}

/* Review

실제 숫자 증가하는 변수(count)와 3x마을에서 현재 몇 개를 셌는지 알려주는 변수(num).
continue가 실행되면 count++는 스킵!
 */

//wrong way
function solution(n) {
  var answer = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) {
      answer += 1;
    } else if (i.toString().includes("3")) {
      answer += 1;
    } else {
      answer = i;
    }
  }
  return answer;
}
