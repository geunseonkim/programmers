function solution(dot) {
  //   // 내가 짠 코드.
  //   if (dot[0] > 0 && dot[1] > 0) return 1;
  //   if (dot[0] < 0 && dot[1] > 0) return 2;
  //   if (dot[0] < 0 && dot[1] < 0) return 3;
  //   if (dot[0] > 0 && dot[1] < 0) return 4;

  //   // 위의 코드 취적화.
  //   return dot[0] > 0 ? (dot[1] > 0 ? 1 : 4) : dot[1] > 0 ? 2 : 3;

  // 구조 분해 할당 사용 -> 가독성 높임.
  const [x, y] = dot;
  return x > 0 ? (y > 0 ? 1 : 4) : y > 0 ? 2 : 3;

  //   // 다른 사람 코드. (구조 분해 할당)
  //   const [n1, n2] = dot;
  //   const check = n1 * n2 > 0;
  //   return n1 > 0 ? (check ? 1 : 4) : check ? 3 : 2;
}
