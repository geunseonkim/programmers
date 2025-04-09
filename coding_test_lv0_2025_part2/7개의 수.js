// [programmers - 7개의 수](https://school.programmers.co.kr/learn/courses/30/lessons/120912?language=javascript)

// Solution
function solution(array) {
  return array.join("").split("7").length - 1;
}

/* Review
    ex) array : [7, 77, 17]
    [ '', '', '', '1', '' ]
     length - 1
  */
