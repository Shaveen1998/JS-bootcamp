// const examplePromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Task completed")
//         reject("Task not completed")
//     },5000)
// })


fetch('https://dog.ceo/api/breeds/image/random')
.then((res)=>{
    res.json()
})
.then(data=>{
    console.log(data)
})
.catch(err=>{
    console.log(err.message)
})

examplePromise
.then((result)=>{
    console.log(result)
})
.catch(err=>{
    console.log(err.message)
})


//promis functions 

//promise.all

//promise.allsettled