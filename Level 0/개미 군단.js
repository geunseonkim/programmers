// 내가 처음 짠 코드.
function solution(hp) {
  let count = 0;
  const ant = [
    ["general", 5],
    ["soldier", 3],
    ["worker", 1],
  ];

  for (let j = 0; j < ant.length; j++) {
    for (let i = 1; i <= 200; i++) {
      if (ant[j][1] * i >= hp) {
        if (ant[j][1] * i === hp) {
          count += i;
          hp -= ant[0][1] * i;
        } else {
          count += i - 1;
          hp -= ant[j][1] * (i - 1);
        }
        break;
      }
    }
    console.log(count);
  }

  return count;
}

// 위 코드의 최적화. : 반복 횟수 최소화. 알고리즘 최적화(불필요한 조건문을 줄이고, 연산을 최소화)
// 시간 복잡도: O(1)
function solution(hp) {
  let count = 0;
  const ant = [
    ["general", 5],
    ["soldier", 3],
    ["worker", 1],
  ];

  for (let j = 0; j < ant.length; j++) {
    const antName = ant[j][0];
    const antStrength = ant[j][1];

    let i = Math.floor(hp / antStrength);
    count += i;
    hp -= antStrength * i;
  }

  return count;
}

// 반복문 사용 vs. 아래의 한 줄 코드(나머지를 이렇게 쓰네.)
// 시간 복잡도: O(1)
function solution(hp) {
  return Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + ((hp % 5) % 3);
}

// or 장군개미 + 병정개미 + 일개미를 차례대로 각각(const) 따로 계산해준 다음 전부 더해주는 방법도 있음.
