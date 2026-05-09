class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const resultMap = new Map()

        for(const str of strs){
            
            const arrayKey = new Array(26).fill(0)
            for(const char of str){
                arrayKey[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }

            const stringKey = arrayKey.join(',')
            
            if(resultMap.has(stringKey)){
                resultMap.get(stringKey).push(str)
            } else {
                resultMap.set(stringKey, [str])
            }
        }
        return Array.from(resultMap.values())
    }
}
