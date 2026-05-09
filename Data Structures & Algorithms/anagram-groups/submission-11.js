class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map()

        for(const str of strs){
            // create a key with their position on the length of lowercase English letters in an array
            const arrayAsKey = new Array(26).fill(0)
            
            for(const char of str){
                arrayAsKey[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
            }

            const stringAsKey = arrayAsKey.join(',')

            if(map.has(stringAsKey)){
                map.get(stringAsKey).push(str)
            } else {
                map.set(stringAsKey, [str])
            }
        }

        return Array.from(map.values())
    }
}
