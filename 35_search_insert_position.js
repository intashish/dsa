// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

const nums = [1, 3, 5, 6];
const target = 7;

let pointerLeft = 0;
let pointerRight = nums.length - 1;
let mid = 0;

while (pointerLeft < pointerRight) {
	mid = Math.floor((pointerRight + pointerLeft) / 2);
	console.log(mid, pointerLeft, pointerRight);

	if (target === nums[mid]) {
		console.log('got it ', mid);
		break;
	}
	if (target < nums[mid]) {
		pointerRight = mid - 1;
	}
	if (target > nums[mid]) {
		pointerLeft = mid + 1;
	}
}

console.log(pointerLeft + 1);
