// fetch('https://swapi.dev/api/people/1/')
// .then(res=>{
//     return res.json()
   
//     })
//     .then(data=>{
//         console.log(data.name)
//         console.log('resolved!!!')
//         fetch('https://swapi.dev/api/people/2/')
//         .then(res=>{
//             return res.json()
//         })
//         .then(data=>{
//             console.log(data.name)
//         })

// })
// .catch(err=>{
//     console.log('error',err)
// })

//make it inside an async function

const fetchStarwarsPeopleNames = async()=>{
    const res = await fetch('https://swapi.dev/api/people/1/')
    const data = await res.json()

    console.log(data.name)
}

fetchStarwarsPeopleNames();