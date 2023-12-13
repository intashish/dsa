class Node {
	constructor(val = 'undefined', next = null) {
		this.val = val;
		this.next = next;
	}
}

const node7 = new Node(7);
const node6 = new Node(6, node7);
const node5 = new Node(5, node6);
const node4 = new Node(4, node5);
const node3 = new Node(3, node4);
const node2 = new Node(2, node3);
const node1 = new Node(1, node2);
node7.next = node4;

// let current = node1;
// while (current) {
// 	console.log(current.val);
// 	current = current.next;
// 	if (current.val === 7) break;
// }
// console.log(current.val);
// current = current.next;
// console.log(current.val);

//--------- MY solution ------
// let position = 1;
// let fastPointer = node1;
// let slowPointer = node1;
// let count = 0;

// while (fastPointer) {
// 	if (count < 1) {
// 		fastPointer = fastPointer.next.next;
// 		slowPointer = slowPointer.next;
// 	} else {
// 		fastPointer = fastPointer.next;
// 		slowPointer = slowPointer.next;
// 	}
// 	position++;
// 	if (fastPointer === slowPointer) {
// 		count++;
// 		console.log('first intersection', fastPointer.val);
// 		slowPointer = node1;
// 		if (count == 2) {
// 			console.log(position);
// 			console.log('second intersection', fastPointer.val);
// 			break;
// 		}
// 		position = 1;
// 	}
// }

let slow = node1;
let fast = node1;

while (fast && fast.next && fast.next.next) {
	fast = fast.next.next;
	slow = slow.next;

	if (slow === fast) {
		slow = node1;
		while (slow !== fast) {
			slow = slow.next;
			fast = fast.next;
		}
		return slow;
	}
}

return null;
