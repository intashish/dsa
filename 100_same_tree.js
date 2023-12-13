class Tree {
	constructor(val = 'undefined', left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

const pNode2 = new Tree(2);
const pNode3 = new Tree(3);
const pNode1 = new Tree(1, pNode2, pNode3);

const qNode2 = new Tree(2);
const qNode3 = new Tree(3);
const qNode1 = new Tree(1, null, qNode3);
// console.log(pNode1);
function checkTree(pNode1, qNode1) {
	if (!pNode1 || !qNode1) {
		console.log('null value');
		return;
	}
	console.log(pNode1.val, ' === ', qNode1.val);
	if (pNode1.val != qNode1.val) {
		console.log('tree are not same');
		return;
	}
	checkTree(pNode1.left, qNode1.left);
	checkTree(pNode1.right, qNode1.right);
	console.log('node are same');
}
checkTree(pNode1, qNode1);

//------ correction in solution ------
// var isSameTree = function (p, q) {
//     if(p==null&&q==null) return true;
// 	if(p==null || q==null)return false;
// 	return (p.val==q.val)&&isSameTree(p.left, q.left)&&isSameTree(p.right, q.right);
// };

//------ JS short solution ------

// return JSON.stringify(p)===JSON.stringify(q)
