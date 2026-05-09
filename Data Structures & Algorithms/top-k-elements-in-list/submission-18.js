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

        const buckets = Array.from({ length: nums.length + 1}, () => [])

        for(const [key, freq] of map.entries()){
            buckets[freq].push(key)
        }

        const result = []

        for(let i = buckets.length - 1; i>=0; i--){
            const bucket = buckets[i]
            if(bucket.length > 0){
                for(const value of bucket){
                    result.push(value)

                    if(result.length === k){
                        return result;
                    }
                }
            }
        }
        
        return result
    }
}
