let s = 'acca';
let long = 0;
let longPalindrome;
for (let i = 0; i < s.length; i++) {
	let l = i;
	let r = i;
	while (l >= 0 && r < s.length && s[l] === s[r]) {
		if (long < r - l + 1) {
			longPalindrome = s.slice(l, r + 1);
			long = r - l + 1;
		}
		l--;
		r++;
	}

	l = i;
	r = i + 1;
	while (l >= 0 && r < s.length && s[l] === s[r]) {
		if (long < r - l + 1) {
			console.log('even', l, r);
			longPalindrome = s.slice(l, r + 1);
			long = r - l + 1;
		}
		l--;
		r++;
	}
}
console.log(longPalindrome || false);
