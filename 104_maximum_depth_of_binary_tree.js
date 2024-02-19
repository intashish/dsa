function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

const node15 = new TreeNode(15);
const node7 = new TreeNode(7);
const node20 = new TreeNode(20, node15, node7);
const node9 = new TreeNode(9);
const node3 = new TreeNode(3, node9, node20);

function dfs(root, count) {
	if (root === null) {
		return count;
	}
	console.log(root.val, root.left, root.right);
	count++;
	let leftCount = dfs(root.left, count);
	let rightCount = dfs(root.right, count);
	return leftCount > rightCount ? leftCount : rightCount;
}

console.log(dfs(node3, 0));
