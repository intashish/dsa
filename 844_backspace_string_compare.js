const s = 'y#fo##f';
const t = 'sy#f#o##f';

let l = s.length - 1;
let r = t.length - 1;
let skipL = 0;
let skipR = 0;
while (s[l] || t[r]) {
	if (s[l] == '#') {
		skipL++;
	} else if (skipL) {
		skipL--;
		l--;
	}

	if (t[r] == '#') {
		skipR++;
	} else if (skipR) {
		skipR--;
		r--;
	}
	if (s[l] !== t[r]) {
		console.log('false');
	}
	l--;
	r--;
}
console.log(l, r);
