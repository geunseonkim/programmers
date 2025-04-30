// [programmers - 직사각형 넓이 구하기](https://school.programmers.co.kr/learn/courses/30/lessons/120860?language=javascript)

// Solution
function solution(dots) {
  const arrX = dots.map((dot) => dot[0]);
  const arrY = dots.map((dot) => dot[1]);

  const width = Math.max(...arrX) - Math.min(...arrX);
  const height = Math.max(...arrY) - Math.min(...arrY);

  return width * height;
}

/* Review
  
not hard coding, use map() and solve with Math.max() and Math.min()
Math.max(arrX) // Math.max([0,1,2])
Math.max(...arrX) // Math.max(0,1,2)
  */

// incorrect way
function solution(dots) {
  var answer = 0;
  const width = (dots[1][0] - dots[0][0]) * (dots[3][0] - dots[2][0]);
  const height = (dots[2][1] - dots[0][1]) * (dots[3][1] - dots[2][1]);
  answer = width * height;
  if (answer < 0) return answer * -1;
  if (answer > 0) return answer;
}

// other correct way
function solution(dots) {
  let x = [],
    y = [];

  for (let pos of dots) {
    x.push(pos[0]);
    y.push(pos[1]);
  }

  return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y));
}
