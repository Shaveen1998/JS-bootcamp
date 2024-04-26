//solution for callback hell (nested callbacks)

// const fakeRequest = (url)=>{

// return new Promise((resolved, rejected)=>{

//     const delay = Math.floor(Math.random()*4500)+500;

//         setTimeout(()=>{
//             if(delay>4000){
//                 rejected('Error');
//             }else{
//                 resolved(`here is the data from ${url}`)
//             }
//         },delay)

//     })

// }

//nested way as a sol to callback hell

// fakeRequest('/efef')
// .then((data)=>{
//     console.log(data)
//     return fakeRequest('/efef/page2')
// })
// .then(data=>{
//     console.log(data)
//     return fakeRequest('/efef/page3')
// })
// .then(data=>{
//     console.log(data)
//     return fakeRequest('/efef/page4')
// })
// .catch((err)=>{
//     console.log(err)
// })

// const fakeRequest = (url) => {
//   return new Promise((resolved, rejected) => {
//     delay = Math.floor(Math.random() * 4500 + 50);

//     setTimeout(() => {
//       if (delay > 4000) {
//         resolved("Passed");
//       } else {
//         rejected("Rejected");
//       }
//     }, delay);
//   });
// };

// fakeRequest("/sddsd")
//   .then((data) => {
//     console.log(data);
//     return fakeRequest("/dsdsd/2");
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

const promise = new Promise((resolved, rejected) => {
  const time = Math.floor(Math.random() * 4500 + 50);
  setTimeout(() => {
    if (time > 4000) {
      resolved("pass");
    } else {
      rejected("failed");
    }
  }, time);
});

Promise.all([promise])
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("promise settled");
  });
