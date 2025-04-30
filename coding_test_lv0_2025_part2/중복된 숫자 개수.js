// [programmers - 중복된 숫자 개수](https://school.programmers.co.kr/learn/courses/30/lessons/120583?language=javascript)

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
