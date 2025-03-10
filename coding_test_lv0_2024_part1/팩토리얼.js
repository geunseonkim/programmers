// (1)
// function solution(n) {
//   function factorial(x) {
//     let result = 1;
//     for (let i = 1; i <= x; i++) {
//       result *= i;
//       if (result > n) break;
//     }
//     return result;
//   }

//   let i = 1;
//   let fact = factorial(i);
//   while (fact <= n) {
//     i++;
//     fact = factorial(i);
//   }
//   return i - 1;
// }

// (2)
// function solution(n) {
//   // 6
//   let answer = 0;
//   let fact = 1;
//   let i = 1;
//   while (fact <= n) {
//     answer = i; // 1 // 2 // 3 (or answer++)
//     i++; // 2 // 3 // 4
//     fact *= i; // 2 // 6 // 24
//   }
//   return answer;
// }

// (3)
function solution(n) {
  // 6
  let fact = 1;
  let i = 1;
  while (fact <= n) {
    //   i++  // 2 // 3 // 4
    //   fact *= i // 2 // 6 // 24
    fact *= ++i;
  }
  return i - 1;
}
// fact *= ++i vs. fact *= i++

// 신박. (위의 while문을 for문으로 이렇게 바꿀 수도 있구나.)
function solution(n) {
  for (let i = 1, v = 1; true; v *= ++i) {
    if (v > n) return --i;
  }
}
