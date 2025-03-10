function solution(numbers) {
  // (1)
  // let result = 0
  // const length = numbers.length
  // for (let i = 0; i < length; i++) {
  //     for (let j = i + 1; j < length; j++) { // j = i + 1 : 중복된 곱셈 방지.
  //             const multi = numbers[i] * numbers[j]
  //             if (multi > result) {
  //                 result = multi;
  //             }
  //     }
  // }
  // return result;

  // (2) 굳이 하나씩 다 곱해서 비교하지 않아도, 배열의 특성을 살려서 구하면 된다!
  numbers.sort((a, b) => b - a);
  return numbers[0] * numbers[1];

  // (3)
  //   let [a, b] = numbers.sort((a, b) => b - a);
  //   return a * b;
}
