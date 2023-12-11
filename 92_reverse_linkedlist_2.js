class Node {
	constructor(val, next) {
		this.val = val ? val : 'undefined';
		this.next = next ? next : null;
	}
}

const node5 = new Node(5);
const node4 = new Node(4, node5);
// const node3 = new Node(3, node4);
// const node2 = new Node(2, node3);
// const node1 = new Node(1, node2);

//1-> 2 -> 3 -> 4 -> 5->null
//    |         |
//1-> 4 -> 3 -> 2 -> 5->null
// left-1, left, right, right+1

let head = node4;
let current = head;
let left = 1;
let right = 2;
let position = 1;
let start = current;

while (position < left) {
	start = current;
	current = current.next;
	position++;
}
let newList = null;
let tail = current; //this will store 2 since in out new list this will be tail and latter we will update it to 5
while (position >= left && position <= right) {
	console.log(current);
	let next = current.next;
	current.next = newList;
	newList = current;
	current = next;
	position++;
	// console.log(newList);
}

tail.next = current;
start.next = newList;

if (left > 1) {
	console.log('head', head);
} else {
	console.log('new list', newList);
}
