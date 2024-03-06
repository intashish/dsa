class PriorityQueue {
	//by default passing function which will work as max heap
	// we can change to min by passing function as a < b
	constructor(comparator = (a, b) => a > b) {
		this.queue = [];
		this._comparator = comparator;
	}

	size() {
		return this.queue.length;
	}

	isEmpty() {
		if (!this.size()) return true;
		else return false;
	}

	peek() {
		return this.queue;
	}

	push(value) {
		this.queue.push(value);
		let idx = this.queue.length - 1;
		let parent = this._parent(idx);
		console.log(value, parent);
		while (parent > -1 && this.queue[parent] < this.queue[idx]) {
			console.log(this.queue);
			this._swap(parent, idx);
			idx = parent;
			parent = this._parent(idx);
		}
	}

	pop() {
		let lastIdx = this.queue.length - 1;
		[this.queue[0], this.queue[lastIdx]] = [this.queue[lastIdx], this.queue[0]];
		let popValue = this.queue.pop();
		let idx = 0;
		let lChild = this._leftChild(idx);
		let rChild = this._rightChild(idx);
		while (this.queue[idx] < this.queue[rChild] || this.queue[idx] < this.queue[lChild]) {
			if (this.queue[idx] < this.queue[lChild]) {
				this._swap(idx, lChild);
				idx = lChild;
			} else if (this.queue[idx] < this.queue[rChild]) {
				this._swap(idx, rChild);
				idx = rChild;
			}
			lChild = this._leftChild(idx);
			rChild = this._rightChild(idx);
		}
		return popValue;
	}

	_swap(idx1, idx2) {
		[this.queue[idx1], this.queue[idx2]] = [this.queue[idx2], this.queue[idx1]];
	}

	_compare(i, j) {
		return this._comparator(this.queue[i], this.queue[j]);
	}
	_parent(idx) {
		return Math.floor((idx - 1) / 2);
	}
	_leftChild(idx) {
		return 2 * idx + 1;
	}

	_rightChild(idx) {
		return 2 * idx + 2;
	}
}

const PQueue = new PriorityQueue();

PQueue.push(10);
PQueue.push(11);
PQueue.push(12);
PQueue.push(13);
console.log(PQueue.peek());
PQueue.pop();
console.log(PQueue.peek());
