"use strict";
function swap(a, b) {
    // let [a,b]=[b,a]
}
var a;
(function (a_1) {
    var log;
    function log1(a) {
        console.log(a);
    }
    log = log1;
    log1(true);
    log(1);
    var sum;
    function FakeSum(a, b) {
        return a;
    }
    FakeSum.getType = '';
    sum = FakeSum;
})(a || (a = {}));
