//async functions always return a promise
//if function-> value promise resolved else error


const login = async(userName, passWord)=>{
    if(!userName||!passWord){
        throw 'Missing credentials'
    }

    if(passWord==='sds') return 'welcome'
    throw 'Wrong password'
}

login('sds', 'asasa')
.then(response=>{
    console.log(response)
})
.catch(err=>{
    console.log(err)
})

//await - pause the execution of an async function until a promise is resolved