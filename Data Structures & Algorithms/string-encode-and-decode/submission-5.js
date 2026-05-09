class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ''

        for(const str of strs){
            res += `${str.length}#${str}`
        }

        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = []
        let i = 0
        let j

        while(i < str.length){
            j = i;
            while(str[j] !== '#'){
                j++
            }
            const lengthString = parseInt(str.substring(i,j))
            i = j + 1 // move i to where the realString starts
            const realString = str.substring(i, i + lengthString)
            result.push(realString)

            i = i + lengthString
        }
        return result;
    }
}
