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
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;
rl.on("line", function (line) {
  input = line;
  console.log(solution(input));
}).on("close", function () {
  process.exit();
});

// 입력 : 1 2
// 출력 : 3
