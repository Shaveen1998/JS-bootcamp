//Global scope
//function scope
//block scope
let global = 1125
add()
//var is the implicit type

function add() {
    var a = 12;
    if (true) {
        let number = 10;
        console.log(number);
        console.log(global)
    }
    console.log(a)
    console.log(global)

}


//hoisting

//function hoisting and variable hoisting

//function definitions gets hoisted
//var gets hoisted not let

//