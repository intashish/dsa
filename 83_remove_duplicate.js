class LinkedList {
	constructor(val = 'undefined', next = null) {
		this.val = val;
		this.next = next;
	}
}

const node3_3 = new LinkedList(3);
const node3 = new LinkedList(3, node3_3);
const node2 = new LinkedList(2, node3);
const node1_1 = new LinkedList(1, node2);
const node1 = new LinkedList(1, node1_1);

let current = node1;

while (current.next) {
	if (current.next.val === current.val) {
		current.next = current.next.next;
	} else {
		current = current.next;
	}
}
current = node1;
while (current) {
	console.log(current.val);
	current = current.next;
}
