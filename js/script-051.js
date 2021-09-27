// Functional Programming
var arr1 = [1,2,3];
console.log(arr1);

function doubleIt(arr) {
    
    var arr2 = []
    for (var i = 0; i < arr.length; i++ ) {
        arr2.push(arr[i] * 2);
    }

    return arr2;
}

console.log(doubleIt(arr1));

function mapForEach(arr, fn) {
    
    var arr3 = []
    for (var i = 0; i < arr.length; i++) {
        arr3.push(fn(arr[i]));
    }

    return arr3;
}

var doubler = mapForEach(arr1, function(item) {
    return item * 2;
});

console.log('doubler : ', doubler);

var greaterThanOne = mapForEach(arr1, function(item) {
    return item > 1;
});

console.log('greaterThanOne : ', greaterThanOne);




var checkPastLimiter = function(limiter, item) {
    return item > limiter;
}

var arr4 = mapForEach(arr1, checkPastLimiter.bind(this, 2));
console.log(arr4);

function checkPastLimiterSimplified(limiter) {
    return function(limiter, item) {
        return item > limiter;
    }.bind(this, limiter);
}

var arr5 = mapForEach(arr1, checkPastLimiterSimplified(3))
console.log(arr5);