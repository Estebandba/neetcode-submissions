class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ''
        for (const str of strs){
            res+= `${str.length}#${str}`
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {

        const result = []
        let i=0;
        let j=0;

        while(i < str.length){
            j = i;

            while(str[j] !== '#'){
                j++
            }

            const lengthString = parseInt(str.substring(i, j))
            i = j + 1;
            const stringValue = str.substring(i, i + lengthString)
            result.push(stringValue)

            i = i + lengthString // '4#hello5#world'
        }

        return result
    }
}
