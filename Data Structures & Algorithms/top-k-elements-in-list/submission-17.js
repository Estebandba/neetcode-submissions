class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        const map = new Map();

        for(const num of nums){
            map.set(num, (map.get(num) || 0) + 1)
        }

        const buckets = Array.from( {length: nums.length + 1}, ()=> [])

        for(const [key, count] of map.entries()){ // [[2, count]]
            buckets[count].push(key)
        }

        const result = []

        for(let i = buckets.length - 1 ; i >= 0; i--){ // [[1,1], [2,3]]
            if(buckets[i].length > 0){
                for(const value of buckets[i]){
                    result.push(value)
                    
                    if(result.length === k){
                        return result
                    }
                }
            }
        }
        return result;
    }
}
