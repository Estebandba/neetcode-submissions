class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // we count the frequency of the numbers with map first
        // We use buckets to position the most repeated numbers 
        // in higher indices in an array so then we can loop 
        // that array backwards and get the top k elements [[],[],[],[]]

        const map = new Map()

        for(const num of nums){
            map.set(num, (map.get(num) || 0) + 1) // map.entries() [[num, count], [num, count]]
        }

        const buckets = Array.from({length: nums.length + 1}, () => []) // +1 for cases where the number is repeated nums.length times, so we have that extra index where to store that case/num

        for(const [num, count] of map.entries()){
            buckets[count].push(num) // buckets[2] -> [x,x,[2],...]
        }
        
        const result = []

        for(let i = buckets.length - 1; i>=0; i--){
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
