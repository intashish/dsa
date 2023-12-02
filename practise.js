// //frequency counter
// const validAnagram = (str1, str2) => {
// 	if (str1.length !== str2.length) {
// 		return false;
// 	}
// 	let countStr1 = {};
// 	let countStr2 = {};
// 	for (let i = 0; i < str1.length; i++) {
// 		countStr1[str1[i]] = countStr1[str1[i]] ? countStr1[str1[i]] + 1 : 1;
// 	}
// 	for (let i = 0; i < str2.length; i++) {
// 		countStr2[str2[i]] = countStr2[str2[i]] ? countStr2[str2[i]] + 1 : 1;
// 	}

// 	console.log(countStr1, countStr2);
// 	for (let i = 0; i < str2.length; i++) {
// 		if (countStr2[str2[i]] !== countStr1[str2[i]]) {
// 			return false;
// 		}
// 	}
// 	return true;
// };
// console.log(validAnagram('qwerty', 'wqerty'));

function sameFrequency(a, b) {
	let count = {};
	a = a.toString();
	b = b.toString();
	console.log(a.length, b.length);
	if (a.length !== b.length) return false;

	for (let i = 0; i < a.length; i++) {
		count[a[i]] = count[a[i]] ? count[a[i]] + 1 : 1;
	}

	console.log(count);
	for (let i = 0; i < b.length; i++) {
		if (!count[b[i]]) return false;
		count[b[i]] = count[b[i]] - 1;
	}
	return true;
}

console.log(sameFrequency(123, 211));
