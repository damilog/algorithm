//후위식 연산(postfix)

//후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.
//만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12입니다.

function solution(s) {
  const stack = [];
  let answer;
  for (const value of s) {
    if (!isNaN(value)) stack.push(+value);
    else {
      const first = stack.pop();
      const second = stack.pop();
      if (value === "+") answer = second + first;
      if (value === "-") answer = second - first;
      if (value === "*") answer = second * first;
      stack.push(answer);
    }
  }

  return answer;
}

let str = "352+*9-";
console.log(solution(str));
