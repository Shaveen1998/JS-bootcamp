let fetchedData = fetch('https://reqres.in/api/users')

fetchedData
.then((res)=>{
    console.log(res)
})