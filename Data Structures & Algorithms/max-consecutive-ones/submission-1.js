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
                maxCount = Math.max(maxCount, count)
            } else {
                count = 0
            }
        }

        return maxCount;
    }
}
