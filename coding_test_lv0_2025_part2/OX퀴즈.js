// [programmers - OX퀴즈](https://school.programmers.co.kr/learn/courses/30/lessons/120907?language=javascript)

// Solution
function solution(quiz) {
  return quiz.map((str) => {
    const [left, right] = str.split("=").map((s) => s.trim());
    const [num1, operator, num2] = left.split(" ");

    let result;
    switch (operator) {
      case "+":
        result = Number(num1) + Number(num2);
        break;
      case "-":
        result = Number(num1) - Number(num2);
        break;
      default:
        result = NaN;
        break;
    }
    return result === Number(right) ? "O" : "X";
  });
}

/* Review
      
Used switch-case and destructuring for cleaner code
*/

function solution(quiz) {
  return quiz.map((str) => {
    const [left, right] = str.split(" = ");
    const [num1, operator, num2] = left.split(" ");

    let result;
    operator === "+" ? (result = +num1 + +num2) : (result = +num1 - +num2);

    return result === +right ? "O" : "X";
  });
}
