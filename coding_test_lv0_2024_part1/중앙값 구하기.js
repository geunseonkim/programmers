// function solution(array) {
//   array.sort((a, b) => a - b);
//   let middleNum = Math.floor(array.length / 2);
//   return array[middleNum];
// }

function solution(array) {
  let newArray = [];

  for (let k = 0; k < array.length; k++) {
    // 3. 그 다음 작은 값을 새 배열에 넣는다.
    let miniNum = 1000; // 4. miniNum 초기화. 이전 반복문에서 찾은 값이 계속 유지x.

    for (let i = 0; i < array.length; i++) {
      if (miniNum > array[i]) {
        miniNum = array[i];
      }
    }
    newArray.push(miniNum); // 1. 가장 작은 값을 새 배열에 넣는다.

    for (let j = 0; j < array.length; j++) {
      if (miniNum === array[j]) {
        array[j] = 1000; // 2. 새 배열에 넣은 값은 없앤다.
        break;
      }
    }
  }
  console.log("newArray", newArray);
  let middleNum = Math.floor(newArray.length / 2);
  return newArray[middleNum];
}
