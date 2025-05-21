// [programmers - 치킨 쿠폰](https://school.programmers.co.kr/learn/courses/30/lessons/120884?language=javascript)

// Solution
function solution(chicken) {
  let coupons = chicken;
  let service = 0;

  while (coupons >= 10) {
    let newService = Math.floor(coupons / 10);
    service += newService;
    coupons = (coupons % 10) + newService;
  }

  return service;
}

/* Review

  첫 서비스 1번 + 내가 사먹은 치킨 9번 => 쿠폰 10장 완성
  첫 서비스 치킨 = 내가 사먹은 10번 => chicken - 1
  -> parseInt((chicken - 1) / 9)
  */

// other way
function solution(chicken) {
  var answer = parseInt((chicken - 1) / 9);
  return answer;
}
