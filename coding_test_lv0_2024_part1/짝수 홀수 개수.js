function solution(num_list) {
  //   (1)
  //   var answer = [];
  //   let evenCount = 0;
  //   let oddCount = 0;
  //   num_list.map((item) => {
  //     if (item % 2 === 0) {
  //       evenCount += 1;
  //     } else {
  //       oddCount += 1;
  //     }
  //   });
  //   return [...answer, evenCount, oddCount];
  //   (2)
  //   let evenCount = 0;
  //   let oddCount = 0;
  //   num_list.forEach((item) => {
  //     item % 2 === 0 ? (evenCount += 1) : (oddCount += 1);
  //   });
  //   return [evenCount, oddCount];

  // (3)
  let answer = [0, 0];
  for (let a of num_list) {
    answer[a % 2] += 1;
  }
  return answer;

  // (4) 비트 연산 (&) // !== &&
  //   return num_list.reduce(
  //     (acc, cur) => (cur & 1 ? acc[1]++ : acc[0]++, acc)
  //     [0, 0]
  //   );
  // or
  //   return num_list.reduce(
  //     (acc, cur) => {
  //       cur & 1 ? acc[1]++ : acc[0]++;
  //       return acc;
  //     },
  //     [0, 0]
  //   );
}
