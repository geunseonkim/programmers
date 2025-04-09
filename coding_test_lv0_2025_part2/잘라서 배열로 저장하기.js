// [programmers - 잘라서 배열로 저장하기](https://school.programmers.co.kr/learn/courses/30/lessons/120913?language=javascript)

// Solution
function solution(my_str, n) {
  let answer = [];
  for (let i = 0; i < my_str.length; i += n)
    answer.push(my_str.slice(i, i + n));
  return answer;
}

/* Review
      use array.slice to push str to array
    */
