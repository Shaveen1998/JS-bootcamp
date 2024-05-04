//reverse a string

// let str = "Hello World";
// function reverseString(str) {
//   let reversedString = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedString += str[i];
//   }

//   return reversedString;

//   //   return str.split("").reverse().join("");
// }

// console.log(reverseString(str));

//longest Word
// let str = "Welcome to the metaverse";
// function longestWord(str) {
//   //split into words
//   let words = [];
//   let word = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== " ") {
//       word += str[i];
//     } else {
//       words.push(word);
//       word = "";
//     }
//   }

//   if (word !== "") {
//     words.push(word);
//     word = "";
//   }

//   let longestWord = "";
//   for (let word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }

//   return longestWord;
// }

// console.log(longestWord(str));

//isPalindrome

// let str = "abbass";

// function isPalindrome(str) {
//   // Use two pointers approach
//   let left = 0;
//   let right = str.length - 1;

//   while (left < right) {
//     if (str[left] !== str[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }
//   return true;
// }

// console.log(isPalindrome(str));

//longest substring wihout repeating values

function getLongestSubstring(str) {
  let longestStr = 0;
  let set = new Set();

  let left = 0;
  let right = 0;

  while (right < str.length) {
    let lettet = str[right];

    if (!set.has(letter)) {
      set.add(letter);
      longestStr = Math.max(longestStr, set.size);
      right++;
    } else {
      //delete left pointer
      set.delete(left);
      left++;
    }
  }

  return longestStr;
}

//cycling in linked lists

function hasCycle(head) {}
