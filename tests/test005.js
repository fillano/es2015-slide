require('babel/polyfill');
(function() {
"use strict";
class a {
    get name() {return 'fillano'}
}
var b = new a();
console.log(b.name);
})();
