class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const duplicates = new Map()

        for (let i = 0; i < nums.length; i++) {
            // count occurances
            const num = nums[i];
            let count = duplicates.get(num) ?? 0
            count++
            duplicates.set(num, count)

            if (count > 1) {
                return true
            }
        }

        return false;
    }
}
