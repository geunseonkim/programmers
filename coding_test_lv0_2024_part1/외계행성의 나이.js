// 내가 처음 짠 코드.
function solution(age) {
  var answer = "";
  let result = "";
  for (let i = 97; i <= 122; i++) {
    // console.log(String.fromCharCode(i))
    answer += String.fromCharCode(i);
  }
  // console.log(answer.split(""))
  // console.log(age.toString().split(""))

  let aphArr = answer.split("");
  let ageArr = age.toString().split("");

  ageArr.reduce((acc, cur, i) => {
    let aphIndex = ageArr[i];
    // console.log(aphArr[aphIndex])
    result += aphArr[aphIndex];
  }, "");

  return result;
}

// map(), join() 힌트를 얻은 코드.
function solution(age) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const ageArr = age.toString().split("");

  const result = ageArr.map((n) => alphabet[n]).join("");

  return result;
}

// alphabet을 a-z까지 하지 않아도 되는 걸 알고 난 코드.
function solution(age) {
  const alphabet = "abcdefghij";
  const result = age
    .toString()
    .split("")
    .map((n) => alphabet[n])
    .join("");

  return result;
}
