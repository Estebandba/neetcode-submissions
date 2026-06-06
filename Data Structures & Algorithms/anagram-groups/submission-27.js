class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const arrayMap = new Map()

        for(const str of strs){
            const arrayKey = new Array('z'.charCodeAt(0) - 'a'.charCodeAt(0) + 1).fill(0)
            
            for(const char of str){
                arrayKey[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
            }

            const stringKey = arrayKey.join()

            if(arrayMap.has(stringKey)){
                arrayMap.get(stringKey).push(str)
            } else {
                arrayMap.set(stringKey, [str])
            }
        }
        return Array.from(arrayMap.values())
    }
}
