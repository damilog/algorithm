//괄호 문자 제거
//입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는 프로그램을 작성하세요.
function solution(s) {
  const stack = [];

  for (const value of s) {
    stack.push(value);
    if (value === ")") {
      while (stack.length > 0) {
        stack.pop();
        if (stack[stack.length - 1] === "(") {
          stack.pop();
          break;
        }
      }
    }
  }
  return stack.join("");
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
