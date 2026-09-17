class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    // remove duplicates in place
    // return number of unique elements
    // first k elemenets of nums are contani unique
    // order should remain the same
    // don't consider element beyond the first k positions
    removeDuplicates(nums) {
        if (nums.length === 0) return 0;
  
        let left = 1;
        let right = 1;

        while (right < nums.length) {
            if (nums[right] !== nums[right - 1]) {
                nums[left] = nums[right];
                left++;
            }
            right++;
        }

        return left;
    }
}
