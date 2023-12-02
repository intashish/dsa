// 28 Find the Index of the First Occurrence in a String

const haystack = 'mississippi';
const needle = 'issip';

let i = 0;
let j = 0;

while (i < haystack.length && needle[j]) {
	if (haystack[i] !== needle[j]) {
		j = 0;
	} else {
		j++;
	}
	i++;
}
console.log(j == 0 ? -1 : i - j);
