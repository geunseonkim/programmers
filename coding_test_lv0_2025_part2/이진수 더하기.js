// [programmers - 이진수 더하기](https://school.programmers.co.kr/learn/courses/30/lessons/120885?language=javascript)

// Solution
function solution(bin1, bin2) {
  return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
}

/* Review
  parseInt; 문자열을 숫자로 변환. // parseInt(변환할 문자열, 문자열이 몇 진수인지 알려줌) => 문자열을 10진수 숫자로 변환.
  (숫자).toString(2) // 숫자(10진수)를 2진수 문자열로 변환.
*/

// other way - 이진수 구현.
function solution(bin1, bin2) {
  let temp = Number(bin1) + Number(bin2);
  temp = [...temp.toString()].reverse().map((v) => +v);

  for (let i = temp.length; i < 11; i++) {
    temp.push(0);
  }

  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === 2) {
      temp[i] = 0;
      temp[i + 1]++;
    } else if (temp[i] === 3) {
      temp[i] = 1;
      temp[i + 1]++;
    }
  }
  return Number(temp.reverse().join("")).toString();
}
