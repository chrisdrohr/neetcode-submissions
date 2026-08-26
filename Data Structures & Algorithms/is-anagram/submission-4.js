class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false

        let map = new Map()

        for (const charS of s) {
            map.set(charS, (map.get(charS) || 0) + 1);
        }

        for (const charT of t) {
            if (!map.has(charT) || map.get(charT) === 0) {
                return false
            }

            map.set(charT, (map.get(charT) - 1))
        }

        return true
    }
}
