// [programmers - 문자 리스트를 문자열로 변환하기](https://school.programmers.co.kr/learn/courses/30/lessons/181941)

// Solution
function solution(arr) {
  return arr.join("");
}
/* Review
Simple and straightforward. nothing special.
 */

//other way
function solution(arr) {
  var answer = "";
  arr.forEach((str) => {
    answer += str;
  });
  return answer;
}
