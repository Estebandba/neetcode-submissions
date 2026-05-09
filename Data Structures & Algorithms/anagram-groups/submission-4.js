class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        // 1. count frequency
        const map = new Map();
        
        for(const str of strs){
            const array = new Array(26).fill(0)
            
            // Create key of frequency
            for(const char of str){
                array[char.charCodeAt(0) - 'a'.charCodeAt(0)] +=1
            }

            const key = array.join()
            if(map.has(key)){
                map.get(key).push(str)
            } else {
                map.set(key, [str])
            }
        }

        return Array.from(map.values())
    }
}
