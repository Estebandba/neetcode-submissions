class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const map = new Map()

        for(const str of strs){
            
            const arrayKey = new Array(26).fill(0)

            for(const char of str){
                arrayKey[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1; // we count frequencies cat => ['1', 0, '1', 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,'1',0,0,0,0,0,0,0]
            }

            const stringKey = arrayKey.join()

            if(map.has(stringKey)){
                map.get(stringKey).push(str)
            } else {
                map.set(stringKey, [str])
            }
        }

        return Array.from(map.values())
    }
}
