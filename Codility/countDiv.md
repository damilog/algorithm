## 1차 - 시간복잡도 실패

```js
function solution(A, B, K) {
	let answer = 0;
	for (let a = A; a <= B; a++) {
		if (a % K === 0) answer++;
	}
	return answer;
}
```

## 2차 - 성공

```js
function solution(A, B, K) {
	const min = (A - 1) / K;
	const max = B / K;
	return Math.floor(max) - Math.floor(min);
}
```
