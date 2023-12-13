class DoubleLL {
	constructor(val) {
		this.val = val ? val : 'undefined';
	}

	connect(next, previous = null, child = null) {
		this.next = next ? next : null;
		this.previous = previous;
		this.child = child;
	}
}
let node1 = new DoubleLL(1);
let node2 = new DoubleLL(2);
let node3 = new DoubleLL(3);
let node4 = new DoubleLL(4);
let node5 = new DoubleLL(5);
let node6 = new DoubleLL(6);

let node7 = new DoubleLL(7);
let node8 = new DoubleLL(8);
let node9 = new DoubleLL(9);
let node10 = new DoubleLL(10);

let node11 = new DoubleLL(11);
let node12 = new DoubleLL(12);

node1.connect(node2);
node2.connect(node3, node1);
node3.connect(node4, node2, node7);
node4.connect(node5, node3);
node5.connect(node6, node4);
node6.connect(null, node5);

node7.connect(node8, null);
node8.connect(node9, node7, node11);
node9.connect(node10, node8);
node10.connect(null, node9);
node11.connect(node12, null);
node12.connect(null, node11);

function flatten(current) {
	while (current.next) {
		let temp = current.next ? current.next : null;
		if (current.child) {
			let tail = flatten(current.child);
			console.log('tail', tail.val);
			console.log('temp', temp.val);
			tail.next = temp;
			current = temp;
		}
		current = current.next;
	}
	// console.log(current.val);
	return current;
}

flatten(node1);
current = node1;
while (current) {
	console.log(current.val);
	current = current.next;
}
