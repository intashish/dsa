const s = 'PAYPALISHIRING';
const row = 3;
const result = [];
if (row === 1) return s;

for (let i = 0; i < row; i++) {
	let gap = (row - 1) * 2;
	let index = i;
	console.log(i);
	while (index < s.length) {
		result.push(s[index]);
		if (i === 0 || i === row - 1) {
			index = index + gap;
		} else {
			let middleGap = gap - 2 * i;
			indexAlt = index + middleGap;
			console.log(indexAlt);
			if (s[indexAlt]) result.push(s[indexAlt]);
			index = index + gap;
		}
		console.log(index);
	}
}

console.log(result.join(''));
