// var nums = [2, 7, 11, 15];
// var target = 9;

// function sumTwo(nums, target) {
//     var result = [];
//     for(var i = 0; i < nums.length; i++ ){
//         for(var j = i+1;j < nums.length; j++){
//             var sum = nums[i] + nums[j];
//             if(sum === target){
//                 result.push(i);
//                 result.push(j);
//                 return result;
//             }
//         }
//     }
//     return result;
// }
// console.log(sumTwo(nums, target));

// var nums = [3,3]//[3,2,4];
// var target = 6;

// function sumTwo(nums, target){
//     var result = [];
//     for(var i = 0; i < nums.length;i++){
//         for(var j = i + 1;j < nums.length;j++){
//             var sum = nums[i] + nums[j]
//             console.log(nums[i],"+",nums[j],"=",sum);
//             if(sum === target){
//                 // console.log(sum)
//                 result.push(i);
//                 result.push(j);
//                 return result;
//             }
//         }
//     }
//     return result;
// }
// console.log(sumTwo(nums, target))

// var sumTwo = function (nums, target){

//     for(var i = 0; i < nums.length;i++){
//         for(var j = i + 1;j < nums.length;j++){


//             if(nums[i] + nums[j] === target){
//                return [i,j]
//             }
//         }
//     }
//     return [i,j]   
// };
// console.log(sumTwo(nums, target))

//  var symbols = {
//     'I' : 1,
//     'V' : 5,
//     'X' : 10,
//     'L' : 50,
//     'C' : 100,
//     'D' : 500,
//     'M' : 1000,
// }
// // console.log(symbols)
//     const romanToInt = function (s) {
//     const allCharacters = s.split('');
//     // console.log(allCharacters);
//     const len = s.length;
//     // console.log(len)
//     let result = 0;

//     for( let i = 0; i < len;i++){
//         if(i < len-1 && symbols[allCharacters[i+1]] > symbols[allCharacters[i]]){
//                result -= symbols[allCharacters[i]]
//             //    console.log(result)
//         }else{
//             result += symbols[allCharacters[i]]
//         }

// }
// return result;
//  }
//  console.log(romanToInt(s))

// Q...Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// var s = "abc";
// var t = "ahbgdc";

// var isSubsequence = function(s, t){
//     let slength = t.length;
//     // console.log(slength)
//     let sublength = s.length;
//     if(sublength === 0){
//         return true;
//         // console.log(sublength);
//     }

//     let c = 0;
//     for( let x = 0;x < slength;x++){
//         // console.log[x];
//        if(t[x] === s[c]){
//         c++;
//         // console.log(t[x])
//        }
//        if(c === sublength){
//         console.log(c)
//         return true;
//        }
//     }
//     return false;
// }
// console.log(isSubsequence(s,t))

//Q...Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".



// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// var strs = ["flower","flow","flight"];
//  console.log(strs)
//  console.log(strs.length)
//  var longestCommonPrefix = function(strs){
//     if(strs.length == 0){

//         return "";

//     }
//     for(var i = 0;i < strs[0].length;i++){
//     console.log(strs[0].length)
//     for(var j = 1;j < strs.length;j++){

//         if(strs[0][i] != strs[j][i]){
//            console.log(strs[0].slice(0,i)) 
//            return strs[0].slice(0,i);
//         }
//     }
//  }
//  return strs[0];
//  }
//  console.log(longestCommonPrefix(strs))

// var i = 10;
// while(i > 0){
//     console.log(i--)
//     if(i === 5){
//         console.log("5-we got")
//         i--;
//         break;
//     }
// }

// var x = 121;

// var isPalindrome = function (x) {
//     var n = x;
//     var t = 0;
//     // var result = []
//     if (x < 0) {
//         return false;
//     }
//     while (x != 0) {
//         var r = parseInt(x % 10)
//         t = t * 10 + r
//         x = parseInt(x / 10)

//         // result.push(r)
//         // console.log(r)
//     }
//     if(t == n){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(isPalindrome(x))

// var x = 121;

// var isPalindrome = function (number){
//     const numString = number.toString()
//     const numStringArrRev = numString.split('').reverse()
//     const numRev = parseInt(numStringArrRev.join(''))
//     return numRev === number;
// }

// console.log(isPalindrome(x))

// var x = "racecar";

// var isPalindrome = function (str){
//     // const numString = number.toString()
//     const numStringArrRev = str.split('').reverse()
//     const numRev = (numStringArrRev.join(''))
//     return numRev === str;
// }

// console.log(isPalindrome(x))

// var nums = [1,1,2];
//  console.log(nums)


// function duplicate(nums){
//     var result = []
//     let i = 0;
//     for(let j = 1;j < nums.length;j++){
//         console.log(j)
//         if( nums[i] !== nums[j]){
//             i++;
//             nums[i] = nums[j]

//             console.log(nums[i])
//             result.push(nums[i])
//             console.log(result)
//         }
//     }
//     return i++;

// };

// console.log(duplicate(nums))

// var s = "PAYPALISHIRING";
// var numRows = 3;





// var matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// // console.log(matrix.length)

// var rotate = function (matrix) {
//     const n = matrix.length;
//     const rotated = Array(n).fill(null).map(() => Array(n).fill(0))
//     // console.log(map)
//     for (let i = 0; i < n; i++) {
//         // console.log(matrix[i])
//         for (let j = 0; j < n; j++) {
//             // console.log(matrix[j])
//            rotated[j][n-i-1] = matrix[i][j];
//            console.log(matrix[i][j])
//         //    console.log(rotated[n-i-1])
//         }
//     }
//     for(let i = 0;i < n;i++){
//              matrix[i] = rotated[i];
//              console.log(matrix[i])
//     }

// };

// console.log(rotate(matrix))


// var nums = [1,3,5,6];
// var target = 5;

// var searchInsert = function (nums, target) {
//     let start = 0, end = nums.length - 1;
//     let ans = nums.length; // Default answer when target is greater than all elements

//     while (start <= end) {
//         let mid = Math.floor((start + end) / 2);
// console.log(mid)
//         if (nums[mid] === target) {
//             return mid;
//         } else if (nums[mid] < target) {
//             start = mid + 1;
//         } else {
//             ans = mid; // Update the answer to the current index
//             end = mid - 1;
//         }
//     }
//     return ans;

// }

// console.log(searchInsert(nums, target) )


// var list1 = [1, 2, 4];
// var list2 = [1, 3, 4];


// function mergeTwoLists(l1, l2) {
//     if (!l1) return l2;
//     else if (!l2) return l1;
//     else if (l1.val <= l2.val) {
//         l1.next = mergeTwoLists(l1.next, l2);
//         return l1;
//     } else {
//         l2.next = mergeTwoLists(l1, l2.next);
//         return l2
//     }

// }

// console.log(mergeTwoLists(list1, list2))

// var args = []

// function createHelloWorld(a) {
//     const greeting = "Hello World";

//     return function(...args) {
//       return greeting;
//     };
//   }

//   console.log(createHelloWorld(args))

// const nums1 = [4, 2, 3, 5];
// const nums2 = [2, 3];
// const nums3 = [];


// for(let i = 0;i <= nums1.length;i++){
//   for(let j=0;j <= nums2.length;j++){
//     if(nums1[i] == nums2[j]){
//       nums3[i+1] = nums1[i]

//     }

//   }

// }
// console.log(nums3)
// const intersection = nums1.filter((curEl) => {
//     return nums2.includes(curEl);
// });
// console.log(intersection)

// const union = [...new Set([...nums1, ...nums2]) ]
// console.log(union)
