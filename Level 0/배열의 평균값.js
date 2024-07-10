function solution(numbers) {
  //   (1)
  //   let addNum = 0;
  //   for (let i = 0; i < numbers.length; i++) {
  //     addNum += numbers[i];
  //   }
  //   (2)
  //   for (i of numbers) { // ES6 for of 사용법. 간단한 듯.
  //     addNum += i;
  //   }
  //   return addNum / numbers.length;

  // (3)
  return numbers.reduce((a, b) => a + b, 0) / numbers.length; // (누적값 = 0, 현재값)
}
