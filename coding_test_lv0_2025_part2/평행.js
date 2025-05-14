// [programmers - 평행](https://school.programmers.co.kr/learn/courses/30/lessons/120875?language=javascript)

// Solution
function solution(dots) {
  function getSlope(p1, p2) {
    return (p2[1] - p1[1]) / (p2[0] - p1[0]);
  }

  const [a, b, c, d] = dots;

  const slope1 = getSlope(a, b);
  const slope2 = getSlope(c, d);
  if (slope1 === slope2) return 1;

  const slope3 = getSlope(a, c);
  const slope4 = getSlope(b, d);
  if (slope3 === slope4) return 1;

  const slope5 = getSlope(a, d);
  const slope6 = getSlope(b, c);
  if (slope5 === slope6) return 1;

  return 0;
}

/* Review
  기울기를 구하기 위한 getSlope 함수를 만들면 간편.
  dots를 구조분해할당으로 재정의.
   */
