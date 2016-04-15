var co = require('co');
(function (){
	function a() {
		return function *(next) {
			console.log('a1');
			yield next;
			console.log('a2');
		};
	}
	function b() {
		return function *(next) {
			console.log('b1');
			yield next;
			console.log('b2');
		}
	}
	function c() {
		return function *(next) {
			console.log('c');
			return 'test';
		}
	}
	function *noop(){console.log('noop')}
	function compose(m) {
		return function *(next) {
			if(!next) next = noop();
			var i = m.length;
			while(i--) {
				next = m[i].call(this, next);
			}
			yield *next;
		}
	}
	var ml = [a(), b(), c()];
	var g = compose(ml)();
	next(g);

})();
