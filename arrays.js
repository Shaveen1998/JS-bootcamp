// two ways to declare 

//array constructor
let myArray = new Array()


//array literal 
let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//push (adding elements)

numArray.push()
numArray.pop()


//map and filter
const players = [
    { name: "Saka", age: 22 },
    { name: "Martinelli", age: 22 },
    { name: "Partey", age: 30 },
    { name: "Rice", age: 25 },
    { name: "Trossard", age: 28 },
    { name: "Gabriel", age: 26 },
    { name: "saliba", age: 21 },
]

// const numbers = numArray.map(number=>{
//     console.log(number)
// })

// const nameOnly = players.map(player=>{
//     console.log(player.name)
// })

const ageFilter = players.filter(player => {
    return player.age > 25
})  //returns the whole object 

console.log(ageFilter.map(player => {
    return player.name
}))

// const nameFilter = players.filter((player)=>{
//     return player.age<=25
// })

// console.log(nameFilter)
// console.log(nameOnly)

players.forEach(player => {
    if (player.age > 25) {
        player.type = "Old"
    } else {
        player.type = "Young"
    }
})

console.log(players)

// //forEach -> doesnot return anything
// players.forEach((player)=>{
//     if(player.name.length<=4){
//         console.log(player.name)
//     }
// })  // this is similar to filter method


// players.forEach((player)=>{
//     if(player.age>=30){
//         player.name
//     }else{
//         console.log("Not selected")
//     }
// })



// //array of objects

// const objArray = [
//     {
//     name:'shaveen',
//     age: 27
//     },
//     {
//     name:'john',
//     age: 15
//     },
//     {
//     name:'jane',
//     age: 23
//     }
// ]

// for (i = 0; i < players.length; i++) {
//     console.log(players[i].name)
// }
// // for(i=0;i<objArray.length;i++){

// //     console.log(objArray[i])

// // }

//slice method in arrays

// let slicedArray = players.slice(1, 4);

// console.log(slicedArray)


//SPLICE method - add remove or replace

let splicedArray  = players.splice(2,2)
console.log(splicedArray)