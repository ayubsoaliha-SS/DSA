// Given an array nums containing n distinct numbers in the 
// range [0, n], return the only number in the range that is
//  missing from the array.
// Example 1:
// Input: nums = [3,0,1]

var missingNumber = function(nums) {
   const n = nums.length;
   let totalsum = (n*(n+1))/2;
   let actualsum=0;
  for(let i = 0 ; i < nums.length ; i++){
    //let currentsum =0;
    actualsum = actualsum + nums[i];
  }

   return totalsum - actualsum;

};