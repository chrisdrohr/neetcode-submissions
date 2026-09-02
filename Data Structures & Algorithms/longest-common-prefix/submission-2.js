class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if (!strs.length) return ''

        const firstString = strs[0]
        let prefix = ''
        for (let i = 0; i < firstString.length; i++) {
            const nextPrefix = `${prefix}${firstString[i]}`
            for (let j = 0; j < strs.length; j++) {
                if (!strs[j].startsWith(nextPrefix)) {
                    return prefix
                }
            }

            prefix = nextPrefix
        }

        return prefix
    }
}
