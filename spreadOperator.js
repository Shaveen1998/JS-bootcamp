//joining arrays

let weekdays = ['MON', 'TUE', 'WED', 'THU', 'FRI']
let weekends = ['SAT', 'SUN']

let daysOfWeek = [...weekdays, ...weekends]
console.log(daysOfWeek)


//joining objects

let obj1 = {
    name: 'shaveen',
    age: 24
}

let obj2 = {
    tel: '0763512288'
}

let combined = { ...obj1, ...obj2 }

console.log(combined)


//copying an object

let initialArray = [1, 2, 3, 4, 5]
let copiedArray = [...initialArray]

console.log(copiedArray)




// //array destructuring REST Operateor

const newArray = ['A', 'B', 'C', 'D', 'E', 'F']

const [a, b, ...rest] = newArray

console.log(b);
console.log(rest[2]);


//add arrays
let array1 = [1, 2, 3, 4, 5]
let array2 = [6, 7, 8, 9, 10]

let result = [...array1, ...array2]
let result2 = array1.concat(array2)
console.log(result2)