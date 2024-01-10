//Named functions
function add(a,b){
    return a+b
}

add(4,5)

//anonymous functions
console.log(function(a,b){
    return a+b;
}(4,5))


//arrowfunctions
console.log((a,b)=>{
    return a+b
})




//callback functions and higher order functions

function add(a,b){
    return a+b
}

function sub(a,b){
    return a-b
}

function mul(a,b){
    return a*b
}

function display(a,b, operation){
    let result = operation(a,b)
    console.log(result)
}

display(5,4,mul)  //here display is a higher order function






//async functions