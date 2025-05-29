// [programmers - k의 개수](https://school.programmers.co.kr/learn/courses/30/lessons/120887?language=javascript)

// Solution
function solution(i, j, k) {
  var answer = 0;
  for (let v = i; v <= j; v++) {
    for (let char of v.toString()) {
      if (char === k.toString()) {
        answer += 1;
      }
    }
  }
  return answer;
}

/* Review
`${v}`, v.toString()
for char of sth => sth 13이면 char 1, 3 한 글자씩 쪼개고 하나씩 꺼내서 char에 넣음.
 */

// simple way
function solution(i, j, k) {
  let a = "";
  for (i; i <= j; i++) {
    a += i;
  }

  return a.split(k).length - 1;
}
