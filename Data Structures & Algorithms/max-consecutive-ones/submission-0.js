class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let maxCount = 0;
        let count = 0;

        for (const num of nums) {
            if (num === 1) {
                count += 1
            } else {
                maxCount = Math.max(maxCount, count)
                count = 0
            }
        }

        return Math.max(maxCount, count);
    }
}
