//binary-tree-right-side-view/description/

function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

// const node8 = new TreeNode(8, undefined, undefined);
// const node7 = new TreeNode(7, node8);
// const node6 = new TreeNode(6);
// const node5 = new TreeNode(5);
// const node4 = new TreeNode(4, undefined, node7);
// const node3 = new TreeNode(3, undefined, node6);
// const node2 = new TreeNode(2, node4, node5);
// const node1 = new TreeNode(1, node2, node3);

// function bfs(root) {
// 	if (!root) {
// 		return [];
// 	}

// 	const queue = [root];
// 	const result = [];

// 	while (queue.length) {
// 		let length = queue.length;
// 		let count = 0;
// 		let currentLevel = [];

// 		while (count < length) {
// 			const currentNode = queue.shift();
// 			currentLevel.push(currentNode);
// 			if (currentNode.left !== null) queue.push(currentNode.left);
// 			if (currentNode.right !== null) queue.push(currentNode.right);
// 			count++;
// 		}
// 		result.push(currentLevel[currentLevel.length - 1].val);
// 	}
// 	console.log(result);
// }
// bfs(node1);

// Depth first search

const node8 = new TreeNode(8, undefined, undefined);
const node7 = new TreeNode(7, node8);
const node6 = new TreeNode(6);
const node5 = new TreeNode(5);
const node4 = new TreeNode(4, undefined, node7);
const node3 = new TreeNode(3, undefined, node6);
const node2 = new TreeNode(2, node4, node5);
const node1 = new TreeNode(1, node2, node3);

function call(root) {
	let result = [];

	console.log(dfs(root, 0, result));
}
function dfs(root, level, result) {
	if (!root) {
		return root;
	}

	if (level >= result.length) {
		result.push(root.val);
	}
	level++;
	if (root.right) {
		dfs(root.right, level, result);
	}
	if (root.left) {
		dfs(root.left, level, result);
	}
	return result;
}

call(node1);
