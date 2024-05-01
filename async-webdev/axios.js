//reverse array
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function reverseArray(arr) {
  let reversedArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }

  return reversedArray;
}

console.log(reverseArray(array));

//reverse string
let string = "shaveen";

function reverseString(str) {
  let reversedString = "";
  for (let i = str.length - 1; i <= 0 - 1; i--) {
    reverseString += str[i];
  }
  return reverseString;
}

console.log(reverseString(str));

//character counter
let str = "geeksforgeeks";

function charCounter() {
  let result = {};

  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (!result[char]) {
      result[char] = 1;
    } else {
      result[char] += 1;
    }
  }
  return result;
}

console.log(charCounter(str));

//merge two sorted  arrays
let arr1 = [2, 5, 9];
let arr2 = [1, 4, 7, 8];

function sort(arr1, arr2) {
  let sortedArray = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      sortedArray.push(arr1[i]);
      i++;
    }
    if (arr1[i] > arr2[j]) {
      sortedArray.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    sortedArray.push(arr1[i]);
  }
  while (j < arr2.length) {
    sortedArray.push(arr2[j]);
  }

  return sortedArray;
}

//ispalindrome
let strr = "abba";
function isPalindrome(str) {
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome(strr));
