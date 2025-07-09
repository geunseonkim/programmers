// [programmers - 홀짝에 따라 다른 값 반환하기](https://school.programmers.co.kr/learn/courses/30/lessons/181935)

// Solution
function solution(n) {
  var answer = 0;
  if (n % 2 === 0) {
    for (let i = n; i >= 1; i--) {
      if (i % 2 === 0) {
        answer += i * i;
      }
    }
  } else {
    for (let i = n; i >= 1; i--) {
      if (i % 2 !== 0) {
        answer += i;
      }
    }
  }
  return answer;
}

/* Review
중복 코드(조건문, 중복문)가 많다 -> 리팩토링.
 */

// refactoring code
function solution(n) {
  let answer = 0;
  const isEven = n % 2 === 0;

  for (let i = isEven ? 2 : 1; i <= n; i += 2) {
    answer += isEven ? i * i : i;
  }

  return answer;
}

// another way
function solution(n) {
  if (n % 2 === 1) return ((n + 1) / 2) * ((n + 1) / 2);
  else return (n * (n + 1) * (n + 2)) / 6;
}
// n이 짝수: 등차수열의 합 공식, n이 홀수: 자연수 거듭 제곱의 합을 구하는 공식

// interesting answer
function solution(n) {
  const isEven = n % 2 === 0;
  const arr = Array.from({ length: n }, (_, i) => i + 1);
  const filter = arr.filter((n) => {
    return isEven ? n % 2 === 0 : n % 2 === 1;
  });
  return isEven
    ? filter.reduce((acc, curr) => acc + curr * curr, 0)
    : filter.reduce((acc, curr) => acc + curr, 0);
}
