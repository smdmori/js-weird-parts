var arr = [
    1,
    false,
    {
        name: 'mori',
        city: 'Tehran'
    },
    function greet(name) {
        console.log('Hello ' + name);
    }
]

console.log(arr);

arr[3](arr[2].name)