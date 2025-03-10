// 0 < angle < 90          (x)
// 0 < angle && angle < 90 (o)

function solution(angle) {
  console.log(typeof angle);

  //   (1)
  //   let answer = 0;
  //   if (0 < angle && angle < 90) {
  //     answer = 1;
  //   } else if (angle === 90) {
  //     answer = 2;
  //   } else if (90 < angle && angle < 180) {
  //     answer = 3;
  //   } else if (angle === 180) {
  //     answer = 4;
  //   } else {
  //     answer = 0;
  //   }
  //   return answer;

  //   (2)
  //   let answer = 0;
  //   if (angle === 180) answer = 4;
  //   else if (angle === 90) answer = 2;
  //   else if (angle > 90) answer = 3;
  //   else if (angle > 0) answer = 1;
  //   return answer;

  //   (3)
  //   return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4

  //   (4)
  //   switch (angle) {
  //     case 90:
  //       return 2;
  //     case 180:
  //       return 4;
  //     default:
  //       return 0 < angle && angle < 90 ? 1 : 3;
  //   }

  //   (5)
  //   return [1, 90, 91, 180].filter((i) => angle >= i).length; // 필터를 통과한 배열만 길이를 보는 것!

  //   (6)
  const angles = [1, 90, 91, 180];
  let count = 0;

  for (let a of angles) {
    if (angle >= a) {
      count++;
    }
  }

  return count;
}
