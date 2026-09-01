class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        // count elements
        const map = new Map()
        
        const result = []
        for (const num of nums) {
            const count = (map.get(num) || 0) + 1
            map.set(num, count)
            
            if (count > nums.length / 3 && !result.includes(num)) {
                result.push(num)
            }
        }

        // return num that exceeds nums/3

        return result
    }
}
