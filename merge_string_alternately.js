//1768. Merge Strings Alternately
// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

const word1 = 'abc';
const word2 = 'pqr';
let i = 0;
let j = 0;
let result = [];
while (word1[i] && word2[j]) {
	if (word1[i]) result.push(word1[i]);
	if (word2[j]) result.push(word2[j]);
	i++;
	j++;
}

if (word1[i]) result.push(word1.slice(i));
if (word2[j]) result.push(word2.slice(j));
console.log(result);
