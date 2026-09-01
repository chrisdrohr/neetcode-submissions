class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        if (nums.length === k) return nums;

        const result = [];
        const map = new Map();
        const buckets = new Array(nums.length + 1);


        for (const num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        for (const [num, count] of map) {
            if (!buckets[count]) buckets[count] = []
            buckets[count].push(num);
        }

        for (let i = buckets.length - 1; i > 0 && result.length < k; i--) {
            if (buckets[i]) {
                for (let j = 0; j < buckets[i].length && result.length < k; j++) {
                    result.push(buckets[i][j])
                }
            }
        }

        return result
    }
}
