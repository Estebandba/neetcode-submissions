class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const map = new Map()
        // 1. sort each entry
        // 2. compare them, if they're equal then put them in the same array

        for(let i = 0 ; i < strs.length; i++){
            let sortedStr = strs[i].split('').sort().join('')
            if(map.has(sortedStr)){
                map.set(sortedStr, [...map.get(sortedStr), strs[i]])
            } else {
                map.set(sortedStr, [strs[i]])
            }
        }

        return Array.from(map.values())
    }
}
