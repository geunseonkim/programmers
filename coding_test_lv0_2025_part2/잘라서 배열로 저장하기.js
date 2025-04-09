// [programmers - 잘라서 배열로 저장하기](https://school.programmers.co.kr/learn/courses/30/lessons/120913?language=javascript)

// Solution
function solution(my_str, n) {
  let answer = [];
  for (let i = 0; i < my_str.length; i += n)
    answer.push(my_str.slice(i, i + n));
  return answer;
}

/* Review
    use slice cut a given array to fit a condition
    another way is bellow
*/

//use regular expression
function solution(my_str, n) {
  return my_str.match(new RegExp(`.{1,${n}}`, "g"));
}
