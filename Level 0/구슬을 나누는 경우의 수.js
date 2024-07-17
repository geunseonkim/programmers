// function solution(balls, share) {
//     function factorial(n) {
//         let result = 1;
//         for (let i = 1; i <= n; i ++) {
//             result *= i
//         }
//         return result
//     }
//     return Math.round(factorial(balls) / (factorial(balls-share) * factorial(share)))
// }

function solution(balls, share) {
  if (balls === share) {
    return 1;
  }

  let numerator = 1;
  let denominator = 1;

  for (let i = 0; i < share; i++) {
    numerator *= balls - i;
    denominator *= i + 1;
  }

  return Math.round(numerator / denominator);
}
