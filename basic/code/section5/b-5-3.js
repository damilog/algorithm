//합이 6이 되는 연속부분수열은 {2, 1, 3}, {1, 3, 1, 1}, {3, 1, 1, 1}로 총 3가지입니다.

//6보다 작으면 rt가 증가하면서 더하고 크면 lt가 증가하면서 뺀다.
function solution(m, arr) {
  let answer = 0;
  (p1 = 0), (sum = 0);
  for (let p2 = 0; p2 < arr.length; p2++) {
    sum += arr[p2];
    if (sum === m) answer++;
    while (sum >= m) {
      sum -= arr[p1++];
      if (sum === m) answer++;
    }
  }
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
