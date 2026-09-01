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
        const buckets = Array.from({ length: nums.length + 1 }, () => []);


        for (const num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        for (const [key, value] of map) {
            buckets[value].push(key);
        }

        for (let i = buckets.length - 1; i > 0; i--) {
            const bucket = buckets[i];

            if (bucket.length) {
                result.push(...bucket);
            }

            if (result.length === k) {
                return result
            }
        }
    }
}
