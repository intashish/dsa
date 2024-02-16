let s = 'lee(t(c)o)de)';
s = s.split('');
let stack = [];
console.log(s);
for (let i = 0; i < s.length; i++) {
	if (s[i] === '(') {
		stack.push(i);
	} else if (s[i] === ')' && stack.length) {
		stack.pop();
	} else if (s[i] == ')') {
		s[i] = '';
		console.log('inside');
	}
	console.log(stack);
}
while (stack.length) {
	const cw = stack.pop();
	s[cw] = '';
}
console.log(s.join(''));
