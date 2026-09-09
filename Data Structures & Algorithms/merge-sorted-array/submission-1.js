class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        const length = m + n
        const index = length - n
        const end = length
        
        nums1.splice(index, end)
        nums1.push(...nums2)
        nums1.sort((a, b) => a - b)
    }
}
