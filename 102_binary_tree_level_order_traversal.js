function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

const node8 = new TreeNode(8);
const node2 = new TreeNode(2);
const node5 = new TreeNode(5, node8);
const node9 = new TreeNode(9, undefined, node5);
const node6 = new TreeNode(6, node9, node2);
const node4 = new TreeNode(4);
const node1 = new TreeNode(1, undefined, node4);
const node3 = new TreeNode(3, node6, node1);

function bfs(root) {
	if (!root) {
		return [];
	}

	const queue = [root];
	const visited = []; //final result

	while (queue.length) {
		let length = queue.length;
		let count = 0;
		const currentLevel = [];
		while (count < length) {
			const currentNode = queue.shift();
			currentLevel.push(currentNode.val);
			if (currentNode.left) queue.push(currentNode.left);
			if (currentNode.right) queue.push(currentNode.right);
			count++;
		}
		visited.push(currentLevel);
	}

	console.log(visited);
}

bfs(node3);
