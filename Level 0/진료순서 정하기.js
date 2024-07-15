function solution(emergency) {
  // 최적화.
  const descending = [...emergency].sort((a, b) => b - a);
  const ranks = {};
  descending.forEach((value, i) => {
    ranks[value] = i + 1;
  });
  return emergency.map((value) => ranks[value]);

  // 처음 푼 풀이.
  //   const descending = [...emergency].sort((a, b) => b - a);
  //   const ranks = [];
  //   for (let i = 0; i < descending.length; i++) {
  //     for (let j = 0; j < emergency.length; j++) {
  //       if (descending[i] === emergency[j]) {
  //         ranks[j] = i + 1;
  //         break;
  //       }
  //     }
  //   }
  //   return ranks;

  // indexOf로 푼 방법도 있던데 이건 배열을 순회하면서 값을 찾기 때문에 emergency의 배열 길이가 길면 비효율적.
}
