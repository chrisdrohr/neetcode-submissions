class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let i = 0, left = 0, right = nums.length - 1;

        while (i <= right) {
            if (nums[i] === 0) { // 1
                [nums[left], nums[i]] = [nums[i], nums[left]] // [0, 1, 2]
                left++ // 1
                i++ // 2
            } else if (nums[i] === 1) { // 0
                i++ // 1
            } else if (nums[i] === 2) { // 0
                [nums[i], nums[right]] = [nums[right], nums[i]] // [1, 0, 2]
                right-- // 1
            }
        }
    }
}
