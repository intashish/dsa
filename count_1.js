const arr = [1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1];
let highest = 0;
let count = 0;
for (let i = 0; i < arr.length; i++) {
	if (arr[i] !== 1) {
		highest = highest < count ? count : highest;
		count = 0;
		console.log(highest, i);
		continue;
	}
	count++;
}
highest = highest < count ? count : highest;
console.log(highest);
