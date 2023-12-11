// const s = 'A man, a plan, a canal: Panama';
const s = ' ';

let leftP = 0;
let rightP = s.length - 1;
const regex = /^[a-zA-Z0-9]+$/;
if (s === ' ') return true;
while (leftP < rightP) {
	let leftWord = s[leftP].toLowerCase();
	let rightWord = s[rightP].toLowerCase();

	if (!leftWord.match(regex)) {
		leftP++;
		continue;
	}
	if (!rightWord.match(regex)) {
		rightP--;
		continue;
	}
	console.log(leftWord, rightWord);

	if (leftWord !== rightWord) {
		console.log('not palindrome');
		break;
	}
	leftP++;
	rightP--;
}
console.log('is a palindrome');
