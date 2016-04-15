function gen() {
	var arr=[1,2,3];
	var i=0;
	return {
		[Symbol.iterator]() {
			return {
				next() {
					if(i<arr.length) {
						return {value: arr[i++], done: false};
					} else {
						return {value: null, done: true}
					}
				}
			};
		}
	};
}
for(var i of gen()) {console.log(i)}