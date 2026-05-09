class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const mapGroupedAnagrams = new Map()

        for(const str of strs){
            const arrayKey = new Array(26).fill(0)

            for(const char of str){
                arrayKey[char.charCodeAt(0) - 'a'.charCodeAt(0)] +=1
            }

            const stringKey = arrayKey.join() // '2,3,0'

            if(mapGroupedAnagrams.has(stringKey)){
                mapGroupedAnagrams.get(stringKey).push(str)
            } else {
                mapGroupedAnagrams.set(stringKey, [str])
            }
        }

        return Array.from(mapGroupedAnagrams.values())
    }
}
