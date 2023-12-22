let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

// let p1 = m - 1;
// let p2 = n - 1;
// let position = m + n - 1;

// while (p1 > 0 || p2 > 0) {
// 	console.log(nums1[p1], nums2[p2]);
// 	if (nums1[p1] < nums2[p2]) {
// 		nums1[position] = nums2[p2];
// 		p2--;
// 	} else {
// 		nums1[position] = nums1[p1];
// 		p1--;
// 	}
// 	position--;
// 	console.log(nums1);
// }

// console.log(nums1);

/* nums1 = [0], m = 0, nums2 = [1], n = 1
this solution is not working for this edge case*/

// 2. solution

// ------------------------------

nums1 = [1, 2, 3, 0, 0, 0];
m = 3;
nums2 = [2, 5, 6];
n = 3;
const start1 = Date.now();
var insertPos = m + n - 1;
m--;
n--;
while (n >= 0) {
	nums1[insertPos--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
}
console.log(nums1);

const end1 = Date.now();
console.log(`Execution time: ${end1 - start1} ms`);
