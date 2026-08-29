class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let prefix = Array(height.length).fill(0);
        let suffix = Array(height.length).fill(0);
        let result = 0;


        for (let left = 0; left < height.length; left++) {
            let right = height.length - left

            prefix[left] = Math.max(height[left], prefix[left - 1] || 0)
            suffix[right] = Math.max(height[right], suffix[right + 1] || 0)
        }
        
        for (let i = 0; i < height.length; i++) {
            const depth = Math.max(0, Math.min(prefix[i], suffix[i]) - height[i])
            result += depth
        }

        return result
    }
}
