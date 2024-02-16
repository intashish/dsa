const Queue = function () {
	this.stack1 = [];
	this.stack2 = [];
};

Queue.prototype.push = function (val) {
	this.stack1.push(val);
};

Queue.prototype.pop = function () {
	let { stack1, stack2 } = this;
	if (stack2.length === 0) {
		while (stack1.length) {
			stack2.push(stack1.pop());
		}
	}
	return stack2.pop();
};

Queue.prototype.peek = function () {
	let { stack1, stack2 } = this;
	if (stack2.length === 0) {
		while (stack1.length) {
			stack2.push(stack1.pop());
		}
	}
	return stack2[stack2.length - 1];
};

Queue.prototype.empty = function () {
	let { stack1, stack2 } = this;
	return stack1.length || stack2.length ? false : true;
};

const myQueue = new Queue();
myQueue.push(1);
myQueue.push(2);
console.log(myQueue.peek(), 'peek');
console.log(myQueue.pop(), 'pop');
console.log(myQueue.empty(), 'empty');

// myQueue.push(1);
// myQueue.push(2);
// myQueue.push(3);
// console.log(myQueue.pop(), 'pop');
// myQueue.push(4);
// console.log(myQueue.pop(), 'pop');
// console.log(myQueue.peek(), 'peek');
// console.log(myQueue.pop(), 'pop');
// console.log(myQueue.peek(), 'peek');
// console.log(myQueue.pop(), 'pop');
// console.log(myQueue.empty(), 'empty');
// console.log(myQueue);
