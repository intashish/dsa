const s = '()';

function valid(s) {
	if (s.length == 0 || s.length % 2 != 0) {
		return false;
	}
	const data = {
		')': '(',
		']': '[',
		'}': '{',
	};
	let i = 0;
	let stack = [];
	while (s[i]) {
		console.log(s[i], data[s[i]], stack);
		if (data[s[i]]) {
			if (stack.pop() != data[s[i]]) {
				return false;
			}
		} else {
			stack.push(s[i]);
		}
		i++;
	}
	stack.length ? console.log('this false', stack) : console.log('true');
	return;
}
console.log(valid(s));
