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
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = []
        let markerOne = 0
        let markerTwo
        let lengthString

        while(markerOne < str.length){
            markerTwo = markerOne;

            while(str[markerTwo] !== '#'){
                markerTwo += 1
            }

            lengthString = parseInt(str.substring(markerOne, markerTwo)) // integer in string
            markerOne = markerTwo + 1; // start of the real string
            result.push(str.substring(markerOne, markerOne + lengthString)) // We push the real string

            markerOne = markerOne + lengthString; // We place the initial marker at the end of the previous real string
        }

        return result;
        
    }
}
