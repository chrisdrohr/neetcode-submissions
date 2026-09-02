class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let ans = [];

        for (let i = 0; i < 2; i++) {
            console.log(nums)
            ans = ans.concat(nums)
        }

        return ans;
    }
}
