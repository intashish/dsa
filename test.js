let arr = [1, 3, 5, 2, 4, 8, 6, 7];

function mergeSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}
	let mid = Math.floor(arr.length / 2);
	let left = mergeSort(arr.slice(0, mid));
	let right = mergeSort(arr.slice(mid));
	return sort(left, right);
}

function sort(left, right) {
	let final = [];
	let i = 0;
	let j = 0;
	while (i < left.length && j < right.length) {
		if (left[i] <= right[j]) {
			final.push(left[i]);
			i++;
		} else {
			final.push(right[j]);
			j++;
		}
	}
	if (i < left.length) {
		final = [...final, ...left.splice(i)];
	}
	if (j < right.length) {
		final = [...final, ...right.splice(j)];
	}
	return final;
}
console.log(mergeSort(arr));
