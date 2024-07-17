// 극히 비효율. reduce의 목적과 맞지 않다. 외부 변수 answer를 사용하고 있음.
// function solution(rsp) {
//   var answer = "";
//   rsp.split("").reduce((acc, cur) => {
//     if (cur === "2") answer += 0;
//     if (cur === "0") answer += 5;
//     if (cur === "5") answer += 2;
//   }, "");
//   return answer;
// }

// reduce를 적절히 사용하려면. reduce의 반환값을 누적하여 최종 값을 얻는 게 좋음.
// function solution(rsp) {
//     return rsp.split("").reduce((acc, cur) => {
//       if (cur === "2") return acc + "0";
//       if (cur === "0") return acc + "5";
//       if (cur === "5") return acc + "2";
//       return acc;
//     }, "");
//   }

function solution(rsp) {
  const RSP = {
    2: 0,
    0: 5,
    5: 2,
  };
  return rsp
    .split("")
    .map((v) => RSP[v])
    .join(""); // rsp.split("") or [...rsp]
}

// function solution(rsp) {
//   return rsp
//     .split("")
//     .map((v) => (v === "2" ? 0 : v === "0" ? 5 : 2))
//     .join("");
// }
