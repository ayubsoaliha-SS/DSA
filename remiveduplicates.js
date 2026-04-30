// Given an integer array nums sorted in non-decreasing
//  order, remove the duplicates in-place such 
//  that each unique element appears only once. 
//  The relative order of the elements should be kept the
//   same.
// Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing 
// duplicates, return the number of unique elements k.
// The first k elements of nums should contain the
//  unique numbers in sorted order. The remaining
//   elements beyond index k - 1 can be ignored.
var removeDuplicates = function(nums) {
    let i = 0; // position for unique elements

    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }

    return i + 1;
};