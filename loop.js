const array = [1,2,3,4,5,6]
console.log(typeof(array[0]))

for(n of array){
    console.log(n)
}

//for in used with ibjects
const obj = {
    name:"John",
    email:"abc@foo.com"
}
for(let key  in obj){
    console.log(obj[key])
}

//forEach  -->> cant use break and continue methods
array.forEach(number=>{
    console.log(number)
})

//forEach
Object.values(obj).forEach(val=>{
    console.log(val)
})

Object.keys(obj).forEach(key=>{
    console.log(key)
})