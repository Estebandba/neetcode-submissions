class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ''
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

        const originalArray = []
        
        let i = 0;
        let j = 0;

        while(i < str.length){
            j = i;

            while(str[j] !== '#'){ // 5#hello5#world
                j++
            }

            const stringLength = parseInt(str.substring(i, j))
            i = j + 1
            const originalString = str.substring(i, i + stringLength)
            originalArray.push(originalString)

            i = i + stringLength
        }

        return originalArray;
    }
}
