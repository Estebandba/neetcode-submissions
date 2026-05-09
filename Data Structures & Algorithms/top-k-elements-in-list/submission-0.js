class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map()

        for(const num of nums){
            if(map.has(num)){
                map.set(num, map.get(num) + 1)
            } else {
                map.set(num, 1)
            }
        }

        const sortedValues = Array.from(map.entries()).sort(([valueA, countA],[valueB, countB]) => countB - countA)

        const result = []

        for(let i =0 ; i < k ; i ++){
            result.push(sortedValues[i][0])
        }

        return result;
    }
}
