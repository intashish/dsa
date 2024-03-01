// Given the root of a complete binary tree, return the number of the nodes in the tree.
// According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.
// Design an algorithm that runs in less than O(n) time complexity.

function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

const node12 = new TreeNode(12);
const node11 = new TreeNode(11);
const node10 = new TreeNode(10);
const node9 = new TreeNode(9);
const node8 = new TreeNode(8);
const node7 = new TreeNode(7);
const node6 = new TreeNode(6, node12);
const node5 = new TreeNode(5, node10, node11);
const node4 = new TreeNode(4, node8, node9);
const node3 = new TreeNode(3, node6, node7);
const node2 = new TreeNode(2, node4, node5);
const node1 = new TreeNode(1, node2, node3);

var countNodes = function (root) {
	if (!root) return 0;
	const height = getTreeHeight(root);
	if (height === 0) return 1;

	const upperCount = Math.pow(2, height) - 1;
	let left = 0;
	let right = upperCount;
	while (left < right) {
		let idxToFInd = Math.ceil((left + right) / 2);
		// if(nodeExists(idx))
	}
};
