// const array = ["React", "Node", "React", "Node", "React", "Js"];
// const uniqueArray = [];
// for (let i in array) {
//   if (!uniqueArray.includes(array[i])) {
//     uniqueArray.push(array[i]);
//   }
// }

// console.log(uniqueArray);

const array = [1, 2, 3, 4, 5, 6, 7];

const reducedArray = array.reduce((num) => {
  return a + num;
});

console.log(reducedArray);
