function solution(s) {
  const arr = s.split(" ");
  const result = arr.filter((v, i) => v !== "Z" && arr[i + 1] !== "Z");
  return result.map(Number).reduce((acc, cur) => acc + cur, 0);
}
