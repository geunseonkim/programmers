// [programmers - 조건 문자열](https://school.programmers.co.kr/learn/courses/30/lessons/181934)

// Solution
function solution(ineq, eq, n, m) {
  const condition = ineq + eq;

  const compareMap = {
    ">=": n >= m,
    "<=": n <= m,
    ">!": n > m,
    "<!": n < m,
  };

  return compareMap[condition] ? 1 : 0;
}

/* Review
">=" 에서 문자열을 제거 하지 않고, 해쉬맵을 사용.
*/
