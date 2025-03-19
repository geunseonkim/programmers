// [programmers - 인덱스 바꾸기](https://school.programmers.co.kr/learn/courses/30/lessons/120895?language=javascript)

// Solution
function solution(my_string, num1, num2) {
  let arr = [...my_string];
  [arr[num1], arr[num2]] = [arr[num2], arr[num1]];
  return arr.join("");
}

/* Review

    Use spread operator to convert to array
    swapped with destructuring, then join
    */
