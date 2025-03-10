function solution(money) {
  //   (1)
  //   let answer = [];
  //   const icedAme = 5500;
  //   let coffee = Math.floor(money / icedAme);
  //   answer.push(coffee);
  //   let rest = money - icedAme * coffee;
  //   answer.push(rest);
  //   return answer;

  //   (2)
  const icedAme = 5500;
  return [Math.floor(money / icedAme), money % icedAme];
}
