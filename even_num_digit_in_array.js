const arr = [12, 345, 2, 6, 7896, 66];
let count = 0;
let evenCount = 0;
const test = [];
for (let i = 0; i < arr.length; i++) {
	let digit = arr[i];
	let tempArr = [];
	while (digit > 0) {
		digit = Math.floor(digit / 10);
		tempArr.push(digit);
		count++;
		console.log(digit);
	}
	if (count % 2 === 0) evenCount++;
	test.push(tempArr);
	count = 0;
}
console.log(test);
console.log(evenCount);

//Given an array nums of integers, return how many of them contain an even number of digits.
