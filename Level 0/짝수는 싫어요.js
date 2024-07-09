function solution(n) {
  let array = [];
  // (1)
  //   for (let i = 1; i <= n; i++) {
  //     if (i % 2 === 1) {
  //       array.push(i);
  //     }
  //   }

  // (2)
  //   for (let i = 1; i <= n; i += 2) array.push(i);

  // (3)
  for (let i = 1; i <= n; i += 2) array = [...array, i];
  return array;
}

// i = i + 1
// i++
// i+=1
