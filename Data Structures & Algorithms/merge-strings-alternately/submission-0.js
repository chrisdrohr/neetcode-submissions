class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        const minLength = Math.min(word1.length, word2.length);
        let word = "";
        for (let i = 0; i < minLength + 1; i++) {
            if (!word1[i]) {
                word += word2.slice(i);
            } else if (!word2[i]) {
                word += word1.slice(i);
            } else {
                word += word1[i] + word2[i];
            }
        }

        return word;
    }
}
