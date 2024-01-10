//var, let, const

//types- number, bigint, null, undefined, string, boolean, symbol(primitive - holds only one value)
//primitive datatypes are immutable 
//non primitives are immutable



//Hoisting
//hoisting only available for var - gives undefined others(let and const) give null
console.log(x)
var x = 10
// console.log(y)
// let y =10



//variable scopes
var number = 12

function myFunction() {
    var number = 15
    console.log(number)
}

if (true) {
    let number = 20
    console.log(number)
}

console.log(number)
myFunction()

