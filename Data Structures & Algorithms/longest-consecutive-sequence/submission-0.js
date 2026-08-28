class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let result = 0;

        for (const num of set) {
            const isStartOfSequence = !set.has(num - 1);

            if (isStartOfSequence) {
                let i = 0;
                let count = 1;

                for (i; i < nums.length; i++) {
                    const hasNextNum = set.has(num + count);
                    if (hasNextNum) {
                        count++;
                    } else {
                        result = Math.max(result, count);
                    }
                }
            }
        }

        return result;
    }
}
