// [programmers - 369게임](https://school.programmers.co.kr/learn/courses/30/lessons/120891?language=javascript)

// Solution
function solution(order) {
  var answer = 0;
  [...String(order)].forEach((num) => {
    if (num === "3" || num === "6" || num === "9") {
      answer++;
    }
  });

  return answer;
}

/*
  Review

  map would be unnecessary here as don't need to return a new arr
  forEach is good for counting without creating a new arr
  simplified with Reduce
  */

function solution(order) {
  return [...String(order)].reduce((acc, num) => {
    return num === "3" || num === "6" || num === "9" ? acc + 1 : acc;
  }, 0);
}
