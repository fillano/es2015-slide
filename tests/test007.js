function *gen() {
	yield *too();
    var arr = [1,2,3];
    for(var i=0;i<arr.length;i++) {
        yield arr[i];
    }
}
function *too() {
    var arr = [4,5,6];
    for(var i=0;i<arr.length;i++) {
        yield arr[i];
    }
}
for(var i of gen()) {console.log(i)}