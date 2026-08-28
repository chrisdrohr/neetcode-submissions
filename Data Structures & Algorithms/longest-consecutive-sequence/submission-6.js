class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;

        const set = new Set(nums);
        let result = 0;

        for (let i = 0; i < nums.length; i++) {
            let count = 1;

            if (!set.has(nums[i] - 1)) {
                while (set.has(nums[i] + count)) {
                    count++;
                }
                result = Math.max(result, count);
            }
        }

        return result;
    }
}
