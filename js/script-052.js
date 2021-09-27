// underscore 

var arr = _.map([1, 2, 3], function(item) {
    return item * 3;
});

console.log(arr);

var arr2 = _.filter([1,2,3,4,5,6,7,8,9], function(item) {
    return item % 2 === 0;
})

console.log(arr2);