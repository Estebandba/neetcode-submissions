class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqMap = new Map()

        for(const num of nums){
            freqMap.set(num, (freqMap.get(num) || 0) + 1)
        }

        const buckets = Array.from({ length: nums.length + 1 }, ()=> [])

        for(const [key, freq] of freqMap){
            buckets[freq].push(key)
        }

        const mostFrequentElements = []

        for(let i = buckets.length - 1; i >= 0 ; i--){
            const curBucket = buckets[i]
            if(curBucket.length > 0){
                for(const entry of curBucket){
                    mostFrequentElements.push(entry)
                    if(mostFrequentElements.length === k){
                        return mostFrequentElements
                    }
                }
            }
        }

        return mostFrequentElements;
    }
}
