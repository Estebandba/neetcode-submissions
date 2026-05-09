class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = '';

        for(const str of strs){
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

        let i = 0;
        let j = 0;

        while(i < str.length){
            j = i

            while(str[j] !== '#'){
                j+=1
            }
            const lengthString = parseInt(str.substring(i, j));
            i = j + 1 // i starts where the string is
            const currentString = str.substring(i, i + lengthString)
            result.push(currentString)

            i = i + lengthString
        }

        return result
    }
}
