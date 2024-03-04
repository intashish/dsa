function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

const node25 = new TreeNode(25);
const node17 = new TreeNode(17);
const node8 = new TreeNode(8);
const node16 = new TreeNode(16, undefined, node17);
const node9 = new TreeNode(9, node8);
const node5 = new TreeNode(5);
const node18 = new TreeNode(18, node16, node25);
const node7 = new TreeNode(7, node5, node9);
const node12 = new TreeNode(12, node7, node18);

var isValidBST = function (root) {
	return check(root, -Infinity, Infinity);
};

function check(node, lowerNode, upperNode) {
	if (!node) return true;
	if (lowerNode < node.val && node.val < upperNode) {
		console.log(lowerNode, '<', node.val, '&&', node.val, '<', upperNode);
		if (!check(node.left, lowerNode, node.val)) return false;
		if (!check(node.right, node.val, upperNode)) return false;
	} else {
		console.log('false');
		return false;
	}
	return true;
}

console.log(isValidBST(node12));
