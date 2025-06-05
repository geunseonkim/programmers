// [programmers - 대소문자 바꿔서 출력하기](https://school.programmers.co.kr/learn/courses/30/lessons/181949)

// Solution
const readline = require("readline");
const rl = readline
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", function (line) {
    let char = [...line].map((ele) =>
      /[A-Z]/.test(ele) ? ele.toLowerCase() : ele.toUpperCase()
    );
    console.log(char.join(""));
  });

/* Review
정규식: 대문자 /[A-Z]/g, 소문자 /[a-z]/g, 대소문자 구분 없을 때 /abc/i
.test() 해당 패턴이 문자열에 하나라도 있으면 true 반환.
.match() 해당 패턴에 맞는 모든 문자를 배열로 반환.
*/

// line.replace(바꾸고 싶은 대상, 바꿀 문자열 or 함수)
// let UpperChar = line.replace(/[A-Z]/g, [...line].toLowerCase())
// UpperChar.replace(/[a-Z]/g, [...line].toLowerCase())
// 위에 처럼 풀면 의도한 대로 풀리지 않음. 아래 식을 보자.
// let char = line.replace(/./g, ch => /[A-Z]/.test(ch) ? ch.toLowerCase() : ch.toUpperCase())

// Improved solution
console.log(
  line.replace(/./g, (ch) =>
    /[A-Z]/.test(ch) ? ch.toLowerCase() : ch.toUpperCase()
  )
);

// 참고
// forEach는 반환값이 없고 새 배열을 만들지 않지만, 내부에서 원본 배열을 직접 수정하거나, 외부 객체를 조작하면 그 변화는 유지됨.

// (1)
let arr1 = [1, 2, 3];
arr.forEach((value, index, array) => {
  array[index] = value * 2; // 원본 배열 직접 변경
});

console.log(arr); // [2, 4, 6]

// (2)
let arr2 = [1, 2, 3];
arr.forEach((value) => {
  value = value * 2; // value 변수만 바뀌고, 원본 배열은 안 바뀜
});

console.log(arr); // [1, 2, 3]

// 대신 새 배열을 만들어야 하면 map 같은 함수를 써야 함.
// forEach, for...of 모두 원본 배열을 직접 수정하면 그 변경은 유지되고, 단순히 반복 변수에 값을 할당하는 건 원본 변경과 무관함.

// (1)
let arr3 = [1, 2, 3];

for (let [index, value] of arr.entries()) {
  arr[index] = value * 2; // 원본 배열 직접 수정
}

console.log(arr); // [2, 4, 6]

// (2)
let arr4 = [1, 2, 3];

for (let value of arr) {
  value = value * 2; // value 변수만 바뀌고, 원본 배열은 안 바뀜
}

console.log(arr); // [1, 2, 3]
