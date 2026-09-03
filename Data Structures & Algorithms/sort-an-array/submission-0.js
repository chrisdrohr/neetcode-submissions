class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        if (nums.length <= 1) return nums

        const result = []

        const merge = (left, right) => {
            let i = 0, j = 0;

            while (i < left.length && j < right.length) {
                if (left[i] < right[j]) {
                    result.push(left[i++])
                } else {
                    result.push(right[j++])
                }
            }

            return result.concat(left.slice(i)).concat(right.slice(j))
        }

        const mid = Math.floor(nums.length / 2)
        const leftArr = this.sortArray(nums.slice(0, mid))
        const rightArr = this.sortArray(nums.slice(mid))
        
        return merge(leftArr, rightArr)
    }
}
