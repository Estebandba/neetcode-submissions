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

        // map {1:1, 2:2, 3:3}

        const buckets = Array.from({ length: nums.length + 1}, ()=> [])
                
        for(const [num, freq] of map.entries()){
            buckets[freq].push(num)
        }

        const result = []
        for(let i = buckets.length - 1 ; i >= 0; i--){
            if(buckets[i].length > 0){
                for(const num of buckets[i]){
                    result.push(num)
                    if(result.length === k){
                        return result;
                    }
                }
            }
        }

        return result;
    }
}
