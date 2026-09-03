class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let i = 0, left = 0, right = nums.length - 1;

        while (i <= right) {
            if (nums[i] === 0) {
                [nums[left], nums[i]] = [nums[i], nums[left]]
                left++
                i++
            } else if (nums[i] === 1) {
                i++
            } else if (nums[i] === 2) {
                [nums[i], nums[right]] = [nums[right], nums[i]]
                right--
            }
        }
    }
}
