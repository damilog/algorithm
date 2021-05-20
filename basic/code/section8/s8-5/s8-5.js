//합이 같은 부분집합 (DFS : 아마존 인터뷰)

function solution(arr) {
  const totalSum = arr.reduce((a, b) => a + b, 0);
  let flag = 0;
  let answer = "NO";
  function DFS(x, sum) {
    if (flag) return;
    if (x === arr.length) {
      if (totalSum - sum === sum) {
        flag = 1;
        answer = "YES";
      }
    } else {
      DFS(x + 1, sum + arr[x]);
      DFS(x + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
