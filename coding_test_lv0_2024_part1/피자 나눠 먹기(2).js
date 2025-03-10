function solution(n) {
  //   (1)
  //   let pizza = 0;
  //   for (let i = 1; i <= 50; i++) { // 여기서 for문을 돌리면 i가 언제까지 실행되는지 정해는 게 애매해짐.
  //     if ((6 * i) % n === 0) {
  //       pizza = i;
  //       break;
  //     }
  //   }
  //   return pizza;

  //   (2)
  let totalSlices = 6;
  while (true) {
    if (totalSlices % n === 0) {
      break;
    }
    totalSlices += 6;
  }
  let pizza = totalSlices / 6;
  return pizza;
}
