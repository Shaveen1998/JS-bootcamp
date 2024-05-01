//reverse an array

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function reverseArray(arr) {
//   //   let reversedArray = [];
//   //   for (let i = arr.length - 1; i >= 0; i--) {
//   //     reversedArray.push(arr[i]);
//   //   }
//   //   return reversedArray;

//   for (let i = 0; i < Math.floor(arr.length / 2); i++) {
//     let left = i;
//     let right = arr.length - 1 - i;
//     console.log(left, right);
//     //swap
//     let temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;
//   }
//   return array;
// }

// console.log(reverseArray(array));

//findMinMax

// function findMinMax(arr) {
//   let min = +Infinity;
//   let max = -Infinity;

//   for (let num of arr) {
//     if (num < min) {
//       min = num;
//     } else if (num > max) {
//       max = num;
//     }
//   }
//   return { min, max };
// }

// console.log(findMinMax([1, 5, 4, 7, 8, 2, 6, 9]));

// function mergeArays(arr1, arr2) {
//   let i = 0;
//   let j = 0;

//   let result = [];

//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       result.push(arr1[i]);
//       i++;
//     }
//     if (arr1[i] > arr2[j]) {
//       result.push(arr2[j]);
//       j++;
//     }
//   }

//   while (i < arr1.length) {
//     result.push(arr1[i]);
//     i++;
//   }

//   while (j < arr2.length) {
//     result.push(arr2[j]);
//     j++;
//   }

//   return result;
// }

// console.log(mergeArays([1, 4, 8, 9], [2, 3, 6]));

//find whether subset

// let array = [2,4,5,6,8,9,12,23]
// let subArray = [4,6,8,9]

// function isSubset(arr, subarr){

// }

function test() {
  let a = "hi";

  if (true) {
    let a = "hello";
    console.log(a);
  }

  console.log(a);
}

test();

function abc(callback) {
  setTimeout(() => {
    console.log("data fetched");
  }, 300);

  callback();
}

function callback() {
  console.log("work done");
}

abc(callback);
