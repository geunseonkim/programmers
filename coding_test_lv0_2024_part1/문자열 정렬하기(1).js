// function solution(my_string) {
// //   (1)
//     let answer = [];
//     let arr = my_string.split("");
//     for (let a of arr) {
//       if (a * 1 === +a) {
//         answer.push(+a);
//       }
//     }
// //   (2) 나의 풀이.
//     let answer = [...my_string].map((v) => +v).filter((a) => a * 1 === +a);
//     return answer.sort((a, b) => a - b);
// //   (3) 정규표현식을 모르면.
//     return (answer = [...my_string]
//       .map((v) => parseInt(v))
//       .filter((v) => !isNaN(v))
//       .sort((a, b) => a - b));
// }

// // (4) 정규표현식을 알면.  \d: 숫자. g: 문자열 내의 모든 패턴 검색.
// // /\d/g는 숫자(0-9)를 전역 검색(global search).
// function solution(my_string) {
//   return my_string
//     .match(/\d/g) // match(/\d/g)에서 배열이 생성, match 메서드는 주어진 정규 표현식과 일치하는 결과를 찾고, 그 결과를 배열로 반환
//     .sort((a, b) => a - b)
//     .map((n) => Number(n));
// }

// // (ex) match() 메서드는 문자열이 정규식과 매치되는 부분을 검색합니다.
// var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
// var regexp = /[A-E]/gi;
// var matches_array = str.match(regexp);

// console.log(matches_array);
// // ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']

// (5) 신기한 풀이.
function solution(my_string) {
  return (
    my_string
      .match(/\d/g)
      ?.map(Number)
      .sort((a, b) => a - b) ?? []
  );
}
