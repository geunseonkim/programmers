function solution(price) {
  // (1)
  // let answer = 0;
  // if (price >= 500000) {
  //     answer = price * (1 - 0.2)
  // } else if (price >= 300000 ) {
  //     answer = price * (1 - 0.1)
  // } else if (price >= 100000) {
  //     answer = price * (1 - 0.05)
  // } else {
  //     answer = price
  // }
  // return Math.floor(answer)

  // (2)
  // price = price >= 500000 ? price * (1 - 0.2) : price >= 300000 ? price * (1 - 0.1) : price >= 100000 ? price * (1 - 0.05) : price
  // return ~~(price)

  // (3)
  const discounts = [
    [500000, 20],
    [300000, 10],
    [100000, 5],
  ];

  for (const discount of discounts) {
    if (price >= discount[0]) {
      return Math.floor(price * (1 - discount[1] * 0.01));
    }
  }
  return price;
}
