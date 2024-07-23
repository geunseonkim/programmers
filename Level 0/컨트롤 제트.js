function solution(s) {
  const arr = s.split(" ");
  const result = arr.filter((v, i) => v !== "Z" && arr[i + 1] !== "Z");
  return result.map(Number).reduce((acc, cur) => acc + cur, 0);
}

// 다른 방식.
function solution(s) {
  const stack = [];
  s.split(" ").forEach((target) => {
    if (target === "Z") stack.pop();
    else stack.push(+target);
  });
  return stack.length ? stack.reduce((pre, cur) => pre + cur) : 0;
}
function solution(s) {
  let arr = s.split(" ");
  while (arr.indexOf("Z") > -1) {
    arr.splice(arr.indexOf("Z") - 1, 2);
  }
  return arr.reduce((a, b) => parseInt(a) + parseInt(b), 0);
}
