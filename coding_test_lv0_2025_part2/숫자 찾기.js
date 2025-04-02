// [programmers - 숫자 찾기](https://school.programmers.co.kr/learn/courses/30/lessons/120904?language=javascript)

// Solution
function solution(num, k) {
  console.log([...String(num)].map(Number).includes(k));
  let numArray = [...String(num)].map(Number);
  return numArray.includes(k) ? numArray.indexOf(k) + 1 : -1;
}

/* Review

    Use includes() to check for existence.
    Use ternary operator to improve readability
*/

//another sol, but unclear.
function solution(num, k) {
  return num.toString().split("").map(Number).indexOf(k) + 1 || -1;
}
