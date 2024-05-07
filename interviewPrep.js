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

// function getLongestSubstring(str) {
//   let longestStr = 0;
//   let set = new Set();

//   let left = 0;
//   let right = 0;

//   while (right < str.length) {
//     let lettet = str[right];

//     if (!set.has(letter)) {
//       set.add(letter);
//       longestStr = Math.max(longestStr, set.size);
//       right++;
//     } else {
//       //delete left pointer
//       set.delete(str[left]);
//       left++;
//     }
//   }

//   return longestStr;
// }

//cycling in linked lists

// function hasCycle(head) {

//   if(!head || !head.next) return false

//   let slow = head;
//   let fast = head.next;

//   while(slow !== fast){
//       if(!fast || !fast.next){
//           return false
//       }

//       slow = slow.next;
//       fast = fast.next.next
//   }

//   return true
// }

//flatten an array

// let array = [4, 5, [1, 2, [8, 9]], 10];

// function flattenArray(array){

//   let flattenedArray = [];

//   function flatten(arr){
//     arr.forEach(element => {
//       if(Array.isflattenArray(element)){
//           flatten(element)
//       }else{
//         flattenedArray.push(element)
//       }
//     });
//   }

//   flatten(array)

//   return flattenedArray
// }

//anagrams in a string

//merge sorted arrays and find the median
// function merge(nums1, nums2){
//     let mergedArray = []
//     let i=0;
//     let j=0;

//     while(i<nums1.length && j< nums2.length){
//         if(nums1[i]<nums2[j]){
//             mergedArray.push(nums1[i])
//             i++
//         }else{
//             mergedArray.push(nums2[j])
//             j++
//         }
//     }

//     while(i<nums1.length){
//         mergedArray.push(nums1[i])
//         i++
//     }

//     while( j< nums2.length){
//         mergedArray.push(nums2[j])
//         j++
//     }

//     return mergedArray
//  }
// var findMedianSortedArrays = function(nums1, nums2) {

//     let merged  = merge(nums1, nums2)

//     let n =  merged.length
//     if(n%2===0){
//         return (merged[n/2-1]+ merged[n/2])/2
//     }else{
//         return merged[Math.floor(n/2)]
//     }

// };

//convert string to an inteegere
// var myAtoi = function (str) {
//   let i = 0;
//   let sign = 1;
//   let result = 0;

//   // Remove leading whitespace
//   while (str[i] === " ") {
//     i++;
//   }

//   // Handle sign
//   if (str[i] === "+" || str[i] === "-") {
//     sign = str[i] === "-" ? -1 : 1;
//     i++;
//   }

//   // Convert characters to integer until non-numeric character is encountered
//   while (i < str.length && /[0-9]/.test(str[i])) {
//     result = result * 10 + parseInt(str[i]);
//     console.log(result);
//     i++;
//   }

//   // Apply sign
//   result *= sign;

//   // Check for overflow
//   if (result < Math.pow(-2, 31)) {
//     return Math.pow(-2, 31);
//   } else if (result > Math.pow(2, 31) - 1) {
//     return Math.pow(2, 31) - 1;
//   }

//   return result;
// };

// myAtoi("words and 987");

//number palindrome
// var isPalindrome = function (x) {
//   if (x < 0) return false;

//   var numstr = x.toString();

//   let left = 0;
//   let right = numstr.length - 1;
//   while (left < right) {
//     if (numstr[left] !== numstr[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }

//   return true;
// };

// console.log(isPalindrome(121));

//remove duplicates from a sorted array
var removeDuplicates = function (nums) {
  let set = new Set();
  let count = 0;
  for (let num of nums) {
    if (!set.has(num)) {
      set.add(num);
      count++;
    }
  }

  return count;
};

console.log(removeDuplicates([1, 1, 5, 4, 8, 8, 4, 6]));
