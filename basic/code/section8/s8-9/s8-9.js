//동전 교환
function solution(m, arr) {
  let answer = Number.MAX_SAFE_INTEGER;
  function DFS(count, sum) {
    if (sum > m) return;
    if (count >= answer) return;
    if (sum === m) {
      console.log(count, sum);
      answer = Math.min(answer, count);
    } else {
      for (let i = 0; i < arr.length; i++) {
        DFS(count + 1, sum + arr[i]);
      }
    }
  }
  DFS(0, 0);
  return answer;
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
