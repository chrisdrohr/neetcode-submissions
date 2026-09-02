class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const ans = [];

        for (let i = 0; i < 2; i++) {
            console.log(nums)
            ans.push(...nums);
        }

        return ans;
    }
}
