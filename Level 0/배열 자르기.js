// 내가 시도한 메소드: join(), split(), toString()
// 배운 메소드: splice(), slice()

// (0) for 루프
// function solution(numbers, num1, num2) {
//   let arr = [];
//   for (let i = num1; i <= num2; i++) {
//     arr.push(numbers[i]);
//   }
//   return arr;
// }
// 수동으로 요소를 추출하므로 코드가 길어질 수 있고, 배열의 크기가 클 경우, 성능이 저하될 수 있음.

// (1) splice
// function solution(numbers, num1, num2) {
//   return numbers.splice(num1, num2 - num1 + 1);
// }
// 원본 배열을 유지하고 싶으면 좋지는 않음.

// (2) slice
function solution(numbers, num1, num2) {
  return numbers.slice(num1, num2 + 1);
}
// 원본 배열 유지, 내장 메소드는 최적화되어 있어 일반적으로 수동으로 요소를 추출하는 것보다 성능이 우수.

// (3) filter
// function solution(numbers, num1, num2) {
//   return numbers.filter((n, i) => num1 <= i && i <= num2);
// }
// 배열의 특정 인덱스 범위를 추출하는 작업에는 slice 메소드가 더 일반적이고 직관적.
