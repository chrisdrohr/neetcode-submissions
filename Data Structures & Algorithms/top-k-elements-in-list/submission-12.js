class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        if (nums.length === k) return nums;
        // count occurances
        const map = new Map();

        for (const num of nums) {
            if (!map.get(num)) {
                map.set(num, 0);
            }

            map.set(num, map.get(num) + 1);
        }
        

        let buckets = Array.from({length: nums.length + 1}, () => []);
        // assign occurance to number
        for (const entry of map.entries()) {
            const [num, count] = entry;
            buckets[count].push(num);
        }

        const result = []

        for (let i = buckets.length - 1; i > 0 && result.length < k; i--) {
            const bucket = buckets[i]
            if (bucket.length) {
                result.push(...bucket)
            }
        }

        return result
    }
}
