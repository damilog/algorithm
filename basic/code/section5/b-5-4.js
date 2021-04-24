function solution(m, arr) {
  let answer = (sum = p2 = 0);
  for (let p1 = 0; p1 < arr.length; p1++) {
    sum += arr[p1];
    if (sum <= m) answer++;
    while (p2 < arr.length) {
      sum -= arr[p2++];
      if (sum <= m) answer++;
    }
  }
  return answer;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
