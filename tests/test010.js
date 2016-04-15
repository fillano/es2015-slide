'use strict';
class MyDate extends Date {
	constructor() {
		super();
	}
	make() {
		return 'Make my Day => ' + this.toString();
	}
}
var d = new MyDate();
console.log(d.make());
