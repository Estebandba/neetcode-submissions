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
        // We add 1 to the length of num in case the number is repeated nums.length
        // so for an array as [1,1,1,1,1], we have 5 the number of the frequencies
        // and we need to store that in the index of buckets[5].push(num)
        // the previous would normally fail without the "+ 1"
        // because the array above has indices from 0 to 4.
        const buckets = Array.from({length: nums.length + 1}, ()=> []) // [[], [], [], []]

        for(const [num, freq] of map.entries()){
            buckets[freq].push(num)
        }

        const result = []

        // because the most freq nums are at greater indices
        // we loop from right to left, so we get the top K numbers
        for(let i = buckets.length - 1; i >= 0; i--){
            if(buckets[i].length > 0){
                for(const num of buckets[i]){
                    result.push(num)

                    if(result.length === k){
                        return result
                    }
                }
            }
        }
    }
}
