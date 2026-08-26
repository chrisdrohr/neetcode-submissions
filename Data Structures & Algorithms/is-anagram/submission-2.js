class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false
        
        const sArray = s.split('')

        for (const tChar of t) {
            const indexOfT = sArray.indexOf(tChar)
            if (indexOfT !== -1) {
                sArray[indexOfT] = null
            }
        }
    
        return sArray.filter(Boolean).length === 0
    }
}
