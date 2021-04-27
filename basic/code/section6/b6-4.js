//쇠막대기

function solution(s) {
  const stack = [];
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
    } else {
      stack.pop();
      if (s[i - 1] === "(") {
        answer += stack.length;
      } else {
        answer++;
      }
    }
  }
  return answer;
}

let a = "(((()(()()))(())()))(()())";
console.log(solution(a));
