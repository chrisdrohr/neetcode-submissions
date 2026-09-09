class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        const maxLength = Math.max(word1.length, word2.length);
        let word = "";

        for (let i = 0; i < maxLength; i++) {
            if (word1[i]) {
                word += word1[i];
            }
            if (word2[i]) {
                word += word2[i];
            }
        }

        return word;
    }
}
