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
        return res
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
            const lengthString = parseInt(str.substring(i, j)) // '4#'
            i = j + 1 // i is now positioned at the start of the real string '4#i'
            const realString = str.substring(i, i + lengthString);
            result.push(realString)

            i = i + lengthString // i is now positioned at the end of the real string
        }
        return result
    }
}
