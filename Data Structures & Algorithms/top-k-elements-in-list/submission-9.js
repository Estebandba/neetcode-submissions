class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        const map = new Map()

        for(const num of nums){
            map.set(num, (map.get(num) || 0) + 1)
        }


        const mapAsArraySorted = Array.from(map.entries()).sort(([,freqA], [,freqB])=> freqB - freqA)

        const result = []


        for(let i = 0; i < k; i++){
            result.push(mapAsArraySorted[i][0])
        }

        return result
    }
}
