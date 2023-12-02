let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let sum = nums[0];
let currSum = sum;
for (let i = 1; i < nums.length; i++) {
	if (currSum < 0) currSum = 0;
	currSum += nums[i];
	console.log('curr sum', currSum);
	sum = Math.max(currSum, sum);
	console.log('max sum', sum);
}
return sum;
