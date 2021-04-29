// 교육 과정 설계
function solution(need, plan) {
  const queue = [...need];

  for (const value of plan) {
    if (queue.includes(value)) {
      if (value !== queue.shift()) {
        return "NO";
      }
    }
  }
  return "YES";
}

let a = "CDB";
let b = "CBDAGE";
console.log(solution(a, b));
