class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        // 1. create the map where the keys and anagram strings will be stored
        const map = new Map()

        // 2. Create the key to count frequencies

        for(const str of strs){
            const arrayKey = new Array(26).fill(0)
            for(const char of str){
                arrayKey[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
            }
            const stringKey =  arrayKey.join() // the key woud look similar to this '0,1,0,0,2'
            if(map.has(stringKey)){
                map.get(stringKey).push(str)
            } else {
                map.set(stringKey, [str])
            }
        }

        return Array.from(map.values())

    }
}
