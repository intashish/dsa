const str = 'abcabcd';

//brute force solution

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
