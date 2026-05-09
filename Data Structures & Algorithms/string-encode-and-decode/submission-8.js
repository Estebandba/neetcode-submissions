class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = ''

        for(const str of strs){
            result += `${str.length}#${str}`
        }

        return result
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
            j=i
            while(str[j] !== '#'){
                j++
            }

            const stringLength = parseInt(str.substring(i, j));
            i = j + 1; // position i at the beginning of the real string
            const decodedString = str.substring(i, i + stringLength)
            result.push(decodedString)

            i = i + stringLength // place i at the end of the decodedString
        }
        return result
    }
}
