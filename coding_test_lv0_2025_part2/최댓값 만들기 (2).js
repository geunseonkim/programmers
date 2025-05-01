// [programmers - 최댓값 만들기 (2)](https://school.programmers.co.kr/learn/courses/30/lessons/120862?language=javascript)

// Solution
function solution(numbers) {
  var answer = -Infinity;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (answer < numbers[i] * numbers[j]) {
        answer = numbers[i] * numbers[j];
      }
    }
  }
  return answer;
}

/* Review
    using sort reduces complexity instead of the duplicate for loop
    */

function solution(numbers) {
  numbers.sort((a, b) => a - b);
  return Math.max(
    numbers[0] * numbers[1],
    numbers[numbers.length - 1] * numbers[numbers.length - 2]
  );
}
