// function solution(balls, share) {
//   function factorial(n) {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//       result *= i;
//     }
//     return result;
//   }
//   return Math.round(
//     factorial(balls) / (factorial(balls - share) * factorial(share))
//   );
// }

// function solution(balls, share) {
//   if (balls === share) {
//     return 1;
//   }

//   let 분자 = 1;
//   let 분모 = 1;

//   for (let i = 0; i < share; i++) {
//     분자 *= balls - i;
//     분모 *= i + 1;
//   }

//   return Math.round(분자 / 분모);
// }

function solution(balls, share) {
  let result = 1;
  while (share > 0) {
    result *= balls / share;
    balls -= 1;
    share -= 1;
  }
  return Math.round(result);
}

// const factorial = (n) => {
//   n === 0 ? 1 : n * factorial(n); // factorial 재귀함수
// };
// function solution(balls, share) {
//   return Math.round(
//     factorial(balls) / factorial(balls - share) / factorial(share)
//   );
// }
