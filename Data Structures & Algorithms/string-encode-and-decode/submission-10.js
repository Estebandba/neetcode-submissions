class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ''
        for(const str of strs){
            res += `${str.length}#${str}` // 5#Hello5#World
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
        let j = 0;

        while(i < str.length){
            j = i;

            while(str[j] !== '#'){
                j++
            }

            const stringLength = parseInt(str.substring(i, j)) // 5
            i = j + 1;
            const currentString = str.substring(i, i + stringLength)
            
            result.push(currentString)

            i = i + stringLength;
        }
        return result;
    }
}
