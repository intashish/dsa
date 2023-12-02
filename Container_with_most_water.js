// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// const height = [1, 1];

let l = 0;
let r = height.length - 1;
let maxArea = 0;
while (l < r) {
	let left = height[l];
	let right = height[r];
	let area = left <= right ? left * (r - l) : right * (r - l);
	console.log(area);
	maxArea = maxArea < area ? area : maxArea;
	if (left <= right) l++;
	else r--;
	console.log(l, r);
}

console.log(maxArea);
