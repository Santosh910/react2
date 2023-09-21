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

var nums = [3,3]//[3,2,4];
var target = 6;

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