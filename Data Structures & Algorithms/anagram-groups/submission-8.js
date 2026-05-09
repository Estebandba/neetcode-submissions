class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const map = new Map()

        for(const str of strs){
            const sortedString = str.split('').sort().join('')
            if(map.has(sortedString)){
                map.get(sortedString).push(str)
            } else {
                map.set(sortedString, [str])
            }
        }

        return Array.from(map.values())
    }
}
