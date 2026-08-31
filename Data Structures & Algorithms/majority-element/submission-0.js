class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        // count occurances
        // if count > n / 2
        // return num
        const map = new Map()

        for (const num of nums) {
            const count = (map.get(num) || 0) + 1
            map.set(num, count)

            if (count > nums.length / 2) {
                return num
            }
        }
    }
}
