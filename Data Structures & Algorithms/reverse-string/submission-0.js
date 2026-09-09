class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        const mid = Math.floor(s.length / 2);
        for (let i = 0; i < mid; i++) {
            console.log(i);
            let j = s.length - 1 - i;
            console.log(s[i], s[j], { i, j });
            [s[i], s[j]] = [s[j], s[i]];
        }
    }
}
