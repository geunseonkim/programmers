function solution(numbers, direction) {
  if (direction === "right") {
    numbers.unshift(numbers.pop()); // 제일 끝에꺼 빼서 앞에 넣고.
  } else if (direction === "left") {
    numbers.push(numbers.shift()); // 제일 앞에꺼 빼서 뒤에 넣고.
  }
  return numbers;
}
// 원본 배열 직접 수정.

// function solution(numbers, direction) {
//   return direction === "right"
//     ? [numbers[numbers.length - 1], ...numbers.splice(0, numbers.length - 1)]
//     : [...numbers.splice(1), numbers[0]];
// }
// // 새로운 배열 생성. (위의 코드는 원본 배열을 복사하고 새로운 배열을 생성하는 추가적인 메모리 사용을 요구.)
