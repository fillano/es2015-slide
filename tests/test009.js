function r(n) {
	if(n<0) {
		return 'done';
	} else {
		return r(--n);
	}
}
console.log(r(10));
