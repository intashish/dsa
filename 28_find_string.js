// 28 Find the Index of the First Occurrence in a String

// const haystack = 'mississippi';
// const needle = 'issip';

const haystack = 'abc';
const needle = 'c';

for (let i = 0; i < haystack.length; i++) {
	let haystackP = i;
	let needleP = 0;
	let count = 0;
	while (haystack[haystackP] === needle[needleP] && needle[needleP] !== undefined) {
		console.log(haystack[haystackP], needle[needleP]);
		needleP++;
		haystackP++;
		count++;
		console.log('count', count);
	}
	if (needle.length == count) {
		console.log('match', i);
		break;
	}
}

console.log('no match');

// let i = 0;
// let j = 0;

// while (i < haystack.length && needle[j]) {
// 	if (haystack[i] !== needle[j]) {
// 		j = 0;
// 	} else {
// 		j++;
// 	}
// 	i++;
// }
// console.log(j == 0 ? -1 : i - j);
