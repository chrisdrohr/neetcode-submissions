class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        const map = new Map()
        let currSum = 0
        let count = 0

        map.set(0, 1)
        // {0: 1, 1: 1, 2: 2, 4: 1}

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i] // 2
            currSum += num // 4
            const diff = currSum - k // 2

            if (map.has(diff)) {
                count += map.get(diff) // 4
            }

            map.set(currSum, (map.get(currSum) || 0) + 1)
        }

        return count
    }
}
