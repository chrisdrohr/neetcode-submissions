class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;

        const set = new Set(nums);
        let result = 0;

        for (const num of set) {
            let count = 1;

            if (!set.has(num - 1)) {
                while (set.has(num + count)) {
                    count++;
                }
            }

            result = Math.max(result, count);
        }

        return result;
    }
}
