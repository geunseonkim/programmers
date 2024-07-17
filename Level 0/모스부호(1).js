function solution(letter) {
  const morse = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
  };

  // 시간 복잡도: O(n) => n: 입력 문자열 letter의 길이.

  //     (1)
  //     let answer = "";
  //     let letterArr = letter.split(" ");
  //     for (const v of letterArr) {
  //       answer += morse[v];
  //     }
  //     return answer;

  //   (2) 문자열 누적 연산(acc + morse[cur])은 각 단계마다 새로운 문자열을 생성하고, 이 연산의 시간 복잡도는 누적된 문자열의 길이에 비례한다.
  //   return letter.split(" ").reduce((acc, cur) => acc + morse[cur], "");

  //   (3)
  return letter
    .split(" ")
    .map((v) => (v = morse[v]))
    .join("");
}
