class Node {
	constructor() {
		this.val = null;
		this.left = null;
		this.right = null;
	}
}

class bts {
	constructor() {
		this.root = null;
		this.current = null;
	}

	push(val, current = null) {
		let newnode = new Node();
		newnode.val = val;
		if (!this.root) {
			this.root = newnode;
			this.current = newnode;
			return val;
		}

		current = current ? current : this.root;

		if (val > current.val) {
			if (!current.right) {
				current.right = newnode;
				return;
			}
			this.push(val, current.right);
		} else if (val < current.val) {
			if (!current.left) {
				current.left = newnode;
				return;
			}
			this.push(val, current.left);
		}
	}
	print() {
		console.log(this.root);
	}
}

let btss = new bts();
btss.push(5);
btss.push(8);
btss.push(3);
btss.push(1);
btss.push(10);
btss.push(13);
// btss.print();

class bfs {
	constructor(node) {
		this.node = node;
		this.queue = [];
		this.visited = [];
	}
	search() {
		console.log(this.node);
		if (!this.node) return false;

		this.queue.push(this.node);
		while (this.queue.length) {
			this.node = this.queue.shift();
			this.visited.push(this.node);
			if (this.node.right) this.queue.push(this.node.right);
			if (this.node.left) this.queue.push(this.node.left);
		}
		console.log('visited array', this.visited);
	}
	print() {
		console.log(this.visited);
	}
}

const bfss = new bfs(btss.root);
console.log('before search');
bfss.search();
console.log('after search');
// bfss.print();
