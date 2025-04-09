// [programmers - 문자열 정렬하기 (2)](https://school.programmers.co.kr/learn/courses/30/lessons/120911?language=javascript)

// Solution
function solution(my_string) {
  var answer = [...my_string.toLowerCase()].sort().join("");
  return answer;
}

/* Review
    use toLowerCase to convert uppercase to lowercase
    use sort for ascending
*/
