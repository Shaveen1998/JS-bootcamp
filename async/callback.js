// setTimeout(() => {
//   console.log("First timeout");
//   setTimeout(() => {
//     console.log("Second timeout");
//     setTimeout(() => {
//       console.log("Third timeout");
//     }, 0);
//   }, 2000);
// }, 6000);

setTimeout(() => {
  console.log("first");
}, 6000);
setTimeout(() => {
  console.log("second");
}, 0);
console.log("third");

//avoiding callback hell

// function delay(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }

// async function main() {
//   await delay(1000);
//   console.log("First timeout");
//   await delay(1000);
//   console.log("Second timeout");
//   await delay(1000);
//   console.log("Third timeout");
// }

// main();
