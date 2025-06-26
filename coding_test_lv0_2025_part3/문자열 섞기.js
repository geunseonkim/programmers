// [programmers - 문자열 섞기](https://school.programmers.co.kr/learn/courses/30/lessons/181942)

// Solution
function solution(str1, str2) {
  var answer = [];

  for (let i = 0; i < str1.length; i++) {
    answer.push(str1[i]);
    answer.push(str2[i]);
  }
  return answer.join("");
}

/* Review
map()의 index를 활용해서 str2[index]로 푼 게 신박함.
 */

// simple solution
function solution(str1, str2) {
  return [...str1].map((x, idx) => x + str2[idx]).join("");
}
