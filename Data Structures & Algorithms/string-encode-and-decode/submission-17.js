class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = ''
        for(const str of strs){
            encodedString += `${str.length}#${str}`
        }
        return encodedString
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = []

        let i = 0;
        let j = 0;

        while(i < str.length){
            j = i;

            while(str[j] !== '#'){
                j++
            }

            const lengthString = parseInt(str.substring(i, j))
            i = j + 1;
            const stringValue = str.substring(i, i + lengthString)
            result.push(stringValue)

            i = i + lengthString;
        }

        return result;
    }
}
