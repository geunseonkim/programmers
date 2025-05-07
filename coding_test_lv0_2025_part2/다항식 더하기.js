// [programmers - 다항식 더하기](https://school.programmers.co.kr/learn/courses/30/lessons/120863?language=javascript)

// Solution
function solution(polynomial) {
  let num1 = 0;
  let num2 = 0;
  const terms = polynomial.split(" + ");
  for (let term of terms) {
    if (term.includes("x")) {
      const xNum = term.replace("x", "") || "1";
      num1 += Number(xNum);
    } else {
      num2 += Number(term);
    }
  }

  let answer = "";

  if (num1 > 0) answer += num1 === 1 ? "x" : `${num1}x`;
  if (num2 > 0) answer += num1 > 0 ? ` + ${num2}` : `${num2}`;

  return answer;
}

/* Review
x의 계수가 1인 것은 "1x"가 아닌 "x"로 처리. (use replace, if)
use 'for of' instead of 'for' loops.
 */

// 처음 접근법. (wrong way)
function solution(polynomial) {
  let num1 = 0;
  let num2 = 0;
  for (let i = 0; i < polynomial.length; i++) {
    if (polynomial[i].includes("x")) {
      if (Num1ber(polynomial[i - 1]) === 0) {
        num1 += 1;
      }
      if (polynomial[i - 1] === undefined) {
        num1 += 1;
      } else {
        num1 += Num1ber(polynomial[i - 1]);
      }
    }
    if (
      !polynomial[i].includes("x") &&
      !polynomial[i + 1].includes("x") &&
      !polynomial[i].includes("+")
    ) {
      num2 += Num1ber(polynomial[i]);
    }
  }
  return num2 > 0 ? `${num1}x + ${num2}` : `${num}x`;
}
