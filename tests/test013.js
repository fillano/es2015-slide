var s = Symbol('test');
var t = Symbol('test');
s === t;//false
var obj = {
	[s]: function() {console.log('[s]')},
	[t]: function() {console.log('[t]')}
}
obj[s]();//[s]
obj[t]();//[t]
