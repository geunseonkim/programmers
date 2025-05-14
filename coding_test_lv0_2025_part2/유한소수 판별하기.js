// [programmers - 유한소수 판별하기](https://school.programmers.co.kr/learn/courses/30/lessons/120878?language=javascript)

// Solution
function solution(a, b) {
  // 최대공약수.
  function gcd(x, y) {
    while (y !== 0) {
      let temp = y;
      y = x % y;
      x = temp;
    }
    return x;
  }

  // 기약분수로 만듦.
  let commonDivisor = gcd(a, b);
  b /= commonDivisor;

  while (b % 2 === 0) {
    b /= 2;
  }
  while (b % 5 === 0) {
    b /= 5;
  }

  // b가 1이면 유한소수, 아니면 무한소수.
  return b === 1 ? 1 : 2;
}

/* Review
최대공약수를 구해서 분모랑 나눠줌.
기약분수 분모가 2, 5로 나눠지면 유한소수.
*/

//other way
function solution(a, b) {
  let n = 1;
  for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) n = i;
  }

  b /= n;
  while (b % 2 === 0) b /= 2;
  while (b % 5 === 0) b /= 5;

  return b === 1 ? 1 : 2;
}
