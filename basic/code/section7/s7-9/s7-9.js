function solution(times) {
	const arr1 = times.map(x => [x[0], "in"]);
	const arr2 = times.map(x => [x[1], "out"]);
	const arr = [...arr1, ...arr2];
	let answer = 0;
	let cnt = 0;
	arr.sort((a, b) => {
		if (a[0] === b[0]) {
			return a[1] - b[1];
		} else {
			return a[0] - b[0];
		}
	});
	arr.forEach(x => {
		if (x[1] === "out") {
			cnt--;
			answer = Math.max(cnt, answer);
		} else cnt++;
	});
	return answer;
}

let arr = [
	[14, 18],
	[12, 15],
	[15, 20],
	[20, 30],
	[5, 14],
];
console.log(solution(arr));
