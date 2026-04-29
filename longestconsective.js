// Given an unsorted array of integers nums,
//  return the length of the longest consecutive 
//  elements sequence.
// You must write an algorithm that runs in O(n) time.
// Example 1:
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest
//  consecutive elements sequence is [1, 2, 3, 4].
// //   Therefore its length is 4.
var longestConsecutive = function(nums) {
   const numset= new Set(nums) ;
   let maxlength=0;
   for(let num of numset){
    //check if it's start of a sequence
    if(!numset.has(num -1 )){
        let currnum = num;
        let currlength=1;
        //count consective numbers
        while(numset.has(currnum +1)){
            currnum++;
            currlength++;
        }
        maxlength=Math.max(maxlength,currlength)
    }
   }
   return maxlength;
};