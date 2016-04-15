new Promise(function(resolve, reject) {
	setTimeout(function() {resolve('p1 ok')}, 1000);
}).then(function(result) {
	console.log(result);
	return new Promise(function(resolve, reject) {
		setTimeout(function() {resolve('p2 ok')}, 1000);
	});
}).then(function(result) {
	console.log(result);
	return new Promise(function(reolve, reject) {
		setTimeout(function() {reject('p3 not ok')}, 1000);
	})
}).then(function(result) {
	console.log('success: '+result)
},
function(reason) {
	console.log('fail: ' + reason);
});
