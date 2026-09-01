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

        // count elements
        for (const num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }
        // {3: 3}
        for (const [key, value] of map) {
            buckets[value].push(key);
        }
        console.log(buckets)

        for (let i = buckets.length - 1; i > 0; i--) {
            const bucket = buckets[i];

            if (bucket.length) {
                console.log('push', bucket)
                result.push(...bucket);
            }

            if (result.length === k) {
                console.log(result)
                return result
            }
        }
    }
}
