// const nums = [5, 7, 8, 8, 8, 9, 10];
const nums = [5, 7, 7, 8, 8, 10];
const target = 6; //8;

const searchRange = function (nums, target) {
	if (!nums.length) return [-1, -1];
	let left = 0;
	let right = nums.length - 1;
	const firstPos = binarySearch(nums, left, right, target);
	console.log(firstPos, 'firstPos');
	let startPos = firstPos;
	let endPos = firstPos;
	let temp1 = startPos;
	let temp2 = endPos;

	while (startPos !== -1) {
		temp1 = startPos;
		startPos = binarySearch(nums, 0, startPos - 1, target);
	}

	startPos = temp1;

	while (endPos !== -1) {
		temp2 = endPos;
		console.log(nums, endPos + 1, nums.length - 1, target);
		endPos = binarySearch(nums, endPos + 1, nums.length - 1, target);
	}
	endPos = temp2;

	return [startPos, endPos];
};

function binarySearch(nums, left, right, target) {
	while (left <= right) {
		console.log(left, right);
		let mid = Math.floor((right - left) / 2) + left;
		if (nums[mid] === target) {
			return mid;
		} else if (nums[mid] < target) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	return -1;
}

console.log(searchRange(nums, target));
