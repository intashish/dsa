//

var findKthLargest = function (nums, k) {
	if (nums.length === 1) return nums[1];
	let left = 0;
	let right = nums.length - 1;
	const target = nums.length - k;
	return quickSort(nums, left, right, target);
};

function quickSort(array, left, right, target) {
	if (left < right) {
		const midPoint = sort(array, left, right);

		if (midPoint === target) {
			console.log(array[midPoint], 'midPoint');
			return array[midPoint];
		}
		if (midPoint < target) {
			return quickSort(array, midPoint + 1, right, target);
		} else {
			return quickSort(array, left, midPoint - 1, target);
		}
	}
}

function sort(array, left, right) {
	let pivot = array[right];
	let j = left;
	for (let i = left; i < right; i++) {
		if (array[i] < pivot) {
			let temp = array[i];
			array[i] = array[j];
			array[j] = temp;
			j++;
		}
	}
	let temp = array[right];
	array[right] = array[j];
	array[j] = temp;
	return j;
}
// const nums = [3, 2, 1, 5, 6, 4];
const nums = [1, 2];
console.log(findKthLargest(nums, 1), 'ans');
