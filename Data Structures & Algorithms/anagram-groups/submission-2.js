class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map()

        for (const str of strs) {
            const key = new Array(26)

            for (const s of str) {
                const index = str.charCodeAt(str.indexOf(s)) - 97
                key[index] = (key[index] || 0) + 1
            }

            const hash = key.join('#')
            if (map.has(hash)) {
                map.get(hash).push(str)
            } else {
                map.set(hash, [str])
            }
        }

        return Array.from(map.values())
    }
}
