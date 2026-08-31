class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map()

        for (let i = 0; i < nums.length; i++) {
            map.set(nums[i], i)
        }

        for (let i = 0; i < nums.length; i++) {
            const difference = target - nums[i];
            
            const index = map.get(difference)
            if (index && index !== i) {
                return [i, index]
            }
        }
    }
}
