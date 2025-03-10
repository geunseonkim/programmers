const GCD = (a, b) => {
  // let miniNum = Math.min(a,b)
  // while (miniNum > 0) {
  //     if(a % miniNum === 0 && b % miniNum === 0) {
  //    return miniNum
  // }
  // miniNum -= 1
  // }

  for (let miniNum = Math.min(a, b); miniNum > 0; miniNum--) {
    if (a % miniNum === 0 && b % miniNum === 0) {
      return miniNum;
    }
  }
};

function solution(numer1, denom1, numer2, denom2) {
  const numer = numer1 * denom2 + numer2 * denom1;
  const denom = denom1 * denom2;
  const gcd = GCD(numer, denom);

  return [numer / gcd, denom / gcd];
}

//1. 분수 덧셈.
//2. 분자분모의 최대공약수로 나눔.
