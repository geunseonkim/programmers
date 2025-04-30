// [programmers - 머쓱이보다 키 큰 사람](https://school.programmers.co.kr/learn/courses/30/lessons/120585?language=javascript)

// Solution
function solution(array, height) {
  var answer = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > height) {
      answer += 1;
    }
  }
  return answer;
}

/* Review
 Use filter to simplify the code.
  */

function solution(array, height) {
  var answer = array.filter((item) => item > height);
  return answer.length;
}

solution([1, 2, 3, 4], 2);
