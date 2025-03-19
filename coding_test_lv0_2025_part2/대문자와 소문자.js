// [programmers - 대문자와 소문자](https://school.programmers.co.kr/learn/courses/30/lessons/120893?language=javascript)

// Solution
function solution(my_string) {
  return [...my_string]
    .map((char) =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
    .join("");
}

/* Review

  my_string.split("") --> [...my_string]

  Used spread operator and map to toggle case
  To check whether the char is upper or lowercase, char === char.toUpperCase()
*/
