// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

let n = 3;
let total = 0;
const memo = {};
function climbStairs(n) {
	if (n == 1) return 1;
	if (n == 2) return 2;
	// if (n == 3) return 3;
	if (memo[n]) {
		return memo[n];
	}
	total = climbStairs(n - 1) + climbStairs(n - 2);
	memo[n] = total;
	return total;
}
console.log(climbStairs(3));
