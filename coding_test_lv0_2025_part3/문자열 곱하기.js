// [programmers - 문자열 곱하기](https://school.programmers.co.kr/learn/courses/30/lessons/181940)

// Solution
function solution(my_string, k) {
  var answer = "";
  for (let i = 0; i < k; i++) {
    answer += my_string;
  }
  return answer;
}

/* Review
my_string * k 은 성립하지 않는다. // null
repeat()을 통해 간단하게 구현 가능.
 */

// simple solution
function solution(my_string, k) {
  return my_string.repeat(k);
}

const solution = (my_string, k) => my_string.repeat(k);
