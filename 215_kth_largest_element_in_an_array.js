const nums = [3, 5, 1, 2, 6, 4];
const k = 2;
let left = 0;
let right = nums.length - 1;
console.log(left, right);
function quickSort(array, left, right) {
	if (left < right) {
		const midPoint = sort(array, left, right);
		console.log(midPoint);
		quickSort(array, left, midPoint - 1);
		quickSort(array, midPoint + 1, right);
	}
}

function sort(array, left, right) {
	console.log(array, left, right);

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
quickSort(nums, left, right);
console.log(nums);
