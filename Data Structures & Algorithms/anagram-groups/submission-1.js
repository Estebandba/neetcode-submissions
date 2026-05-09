class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const map = new Map()

        for(const str of strs){

            const count = new Array(26).fill(0)
            
            for(const char of str){
                // count is [0,0,0,0,0,0...]
                // operation looks for index in count as count[94 - 90]
                // we use 'a' to substract 'cause is the lowest value in the alphabet (90), z is the greatest (122)
                // We access the value at the index 4  count[4]
                // The value is 0 
                // We sum 0 + 1 => We added one to the alphabet position of the letter
                // now we have [0,0,0,0,1,...]

                count[char.charCodeAt(0) - 'a'.charCodeAt(0)] +=1
            }

            const countKey = count.join(',')

            if(map.has(countKey)){
                map.set(countKey, [...map.get(countKey), str])
            } else {
                map.set(countKey, [str])
            }   
        }
        return Array.from(map.values())
    }
}
