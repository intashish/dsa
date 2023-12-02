function Node(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

const addTwoNum = function (l1, l2) {
	let sum = 0;
	let carry = 0;
	const head = new Node();
	const result = head;
	while (l1 || l2) {
		sum = carry;

		if (l1) {
			sum = sum + l1.val;
			l1 = l1.next;
		}
		if (l2) {
			sum = sum + l2.val;
			l2 = l2.next;
		}

		let digit = sum % 10;
		carry = Math.floor(sum / 10);
		result.next = new Node(digit, null);
		result = result.next;
	}

	return head.next;
};
