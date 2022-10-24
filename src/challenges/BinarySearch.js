/*
Given an array of integers nums which is sorted in ascending order, 
and an integer target, write a function to search target in nums. If target exists, 
then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1

Constraints:

1 <= nums.length <= 104
-104 < nums[i], target < 104
All the integers in nums are unique.
nums is sorted in ascending order.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const search = (nums, target) => {
    let numIndexPointer = 0
    let numberFound = false
    while(nums.length > 1 && !numberFound) {
        const indexDivided = Math.trunc(nums.length / 2)
        if (nums[indexDivided] <= target) {
            numIndexPointer += indexDivided
            nums = nums.slice(indexDivided)
        } else {
            nums = nums.slice(0, indexDivided)
        }
        console.log(nums)
    }
    if (target === nums[0]) numberFound = true
    console.log(0 === true)
    return numberFound ? numIndexPointer : -1
};

console.log(search([1, 2, 3, 6, 19, 43], 19))
console.log(search([2], 2))
console.log(search([-1, 0, 5], 0))