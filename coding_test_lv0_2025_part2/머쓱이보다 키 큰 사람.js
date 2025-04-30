// [programmers - 머쓱이보다 키 큰 사람](https://school.programmers.co.kr/learn/courses/30/lessons/120585?language=javascript)

// Solution
function solution(array, n) {
  var answer = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] === n) {
      answer += 1;
    }
  }
  return answer;
}

/* Review
  for문 외에 filter()를 사용.
  */

function solution(array, n) {
  var answer = 0;
  let Array = array.filter((item) => item === n);
  answer = Array.length;

  return answer;
}
