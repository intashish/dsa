const str = 'abcbdert';

//brute force solution
//efficiency: 500ms on leetcode
let track = [];
let maxLength = 0;
for (let i = 0; i < str.length; i++) {
	let j = i;
	while (!track.includes(str[j]) && j < str.length) {
		track.push(str[j]);
		j++;
	}
	console.log(track);
	maxLength = Math.max(maxLength, track.length);
	track = [];
}
console.log(maxLength);

//optimized solution
//efficiency: 60ms on leetcode
// let l = 0;
// let maxSize = 0;
// const set = new Set();
// for (let i = 0; i < str.length; i++) {
// 	while (set.has(str[i])) {
// 		set.delete(str[l]);
// 		l++;
// 	}
// 	set.add(str[i]);
// 	maxSize = Math.max(maxSize, i - l + 1);
// }

// console.log(maxSize);
