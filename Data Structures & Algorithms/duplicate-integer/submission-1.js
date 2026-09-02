class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const dupes = new Map();

        for (const num of nums) {
            const count = (dupes.get(num) || 0) + 1;

            if (count > 1) {
                return true;
            }

            dupes.set(num, count);
        }

        return false;
    }
}
