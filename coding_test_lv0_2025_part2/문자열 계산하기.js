// [programmers - 문자열 계산하기](https://school.programmers.co.kr/learn/courses/30/lessons/120902?language=javascript)

// Solution
function solution(my_string) {
  var answer = 0;
  answer = eval(my_string);

  // let operator = my_string.includes("+") ? "+" : "-"
  // answer = my_string.split(`${operator}`).map(Number).reduce((a,b)=> operator === "+" ? a+b : a-b)
  return answer;
}

/* Review
  
Use eval() for simplicity but could be insecure


Handle operation with a stack, which is safer and more explicit
  */
function solution(my_string) {
  const stack = [];

  let sign = 1;
  for (const ch of my_string.split(" ")) {
    if (ch === "+") {
      sign = 1;
    } else if (ch === "-") {
      sign = -1;
    } else {
      stack.push(ch * sign);
    }
  }

  return stack.reduce((a, b) => a + b, 0);
}
