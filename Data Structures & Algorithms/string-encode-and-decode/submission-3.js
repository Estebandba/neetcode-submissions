class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = ''
        // 1. loop over the strs and encode them with their length and a symbol
        for(const str of strs){
            result+=(`${str.length + '#' + str}`)
        }
        return result // 3#cat
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) { // 3#cat
        const result = []
        let i =0
        let realStringStartMarker
        let lengthString
        
        while(i < str.length){
            realStringStartMarker = i
            while(str[realStringStartMarker] !== "#"){ // here our marker {realStringStartMarker} is positioned where the number is at "0", the same as "i"
                realStringStartMarker += 1 // here our marker is positioned where the "#" is at "1"
            }
            lengthString = parseInt(str.slice(i,realStringStartMarker)) // this is the integer "3" -> 0,1 
            const realString = str.slice(realStringStartMarker + 1, realStringStartMarker + 1 + lengthString) // this is our string "cat" -> 2,5
            result.push(realString)
            i = realStringStartMarker + 1 + lengthString // this is where out "cat" string ends
        }

        return result;
    }
}
