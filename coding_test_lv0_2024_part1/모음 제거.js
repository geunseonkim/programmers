function solution(my_string) {
  // (1)
  // let letter = ["a", "e", "i", "o", "u"];
  // let result = my_string;
  // for (let a of letter) {
  //   result = result.replaceAll(a, "");
  // }
  // return result;

  // (2) 정규식 활용 -> g(global) : 문자열 내의 모든 패턴을 검색한다.
  return my_string.replace(/[aeiou]/g, "");
}
