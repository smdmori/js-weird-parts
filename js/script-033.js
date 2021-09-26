var objLiteral = {
    firstname: 'Mori',
    isAProgrammer: true
}

console.log(objLiteral);

console.log('JSON ', JSON.stringify(objLiteral));

var jasonValue = JSON.parse('{ "firstname": "Mori", "isAProgrammer": true }')

console.log('jasonValue ', jasonValue);