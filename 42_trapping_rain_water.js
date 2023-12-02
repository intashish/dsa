// const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
// const height = [3, 4, 3];
//brute force
// let totalWater = 0;
// for (let p = 0; p < height.length; p++) {
// 	let leftPointer = p;
// 	let rightPointer = p;
// 	let maxLeft = 0;
// 	let maxRight = 0;
// 	while (leftPointer >= 0) {
// 		maxLeft = Math.max(maxLeft, height[leftPointer]);
// 		leftPointer--;
// 	}
// 	while (rightPointer < height.length) {
// 		maxRight = MAth.max(maxRight, height[rightPointer]);
// 		rightPointer++;
// 	}
// 	let minHeight = Math.min(maxLeft, maxRight);
// 	area = minHeight > 0 ? minHeight - height[p] : 0;
// 	console.log('area', area, 'maxLeft, maxRight', maxLeft, maxRight, 'height[p]', p, height[p]);
// 	totalWater += area > 0 ? area : 0;
// 	console.log('totalWater', totalWater);
// }

// console.log(totalWater);

/*
    this is a 2 pointer approach
    HINT: min(maxLeft,maxRight) - currentHeight
    calculate water level at every point
    1. because imagine 2 walls pl, pr
    2. water can be hold up to the level = min value of walls height
    3. min wall height - current height
*/

// const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
const height = [3, 4, 3];

let pl = 0;
let pr = height.length - 1;
let totalWater = 0;
let maxLeft = 0;
let maxRight = 0;
let currentWaterLevel = 0;
let p = 0;
while (pl < pr) {
	if (height[pl] <= height[pr]) {
		if (maxLeft > height[pl]) {
			totalWater += maxLeft - height[pl];
		} else {
			maxLeft = height[pl];
		}
		console.log('pl', pl);
		pl++;
	} else {
		if (maxRight > height[pr]) {
			totalWater += maxRight - height[pr];
		} else {
			maxRight = height[pr];
		}
		console.log('pr', pr);
		pr--;
	}
}
console.log(totalWater);
