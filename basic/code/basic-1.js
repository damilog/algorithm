function solution(a, b, c) {
  if (a < b && a < c) return a;
  if (b < a && b < c) return b;
  if (c < a && c < b) return c;
}

console.log(solution(2, 5, 1));
