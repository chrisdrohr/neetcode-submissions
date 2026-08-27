class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = "";
        for (const str of strs) {
            encodedString += str.length + "#" + str;
        }

        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decodedString = [];

        let i = 0;

        while (i < str.length) {
            let delimiterIndex = i;

            while (str[delimiterIndex] !== "#") {
                delimiterIndex++;
            }

            const strLength = parseInt(str.slice(i, delimiterIndex), 10);

            const fromIndex = delimiterIndex + 1;

            const toIndex = fromIndex + strLength;

            const currentStr = str.slice(fromIndex, toIndex);

            decodedString.push(currentStr);

            i = toIndex;
        }

        return decodedString;
    }
}
