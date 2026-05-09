class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        // we'll use buckets for this excercise
        // this mean that we will count the frequency of numbers
        // and add the in their own "buckets" so on the indices of the array
        // we have created, this way those with most frequency will be at the
        // greatest indices like [1,2,3,4,5]
        // there we will naturally have the top frequencies to the right

        const map = new Map()

        for(const num of nums){
            map.set(num, (map.get(num) || 0) + 1)
        }

        const buckets = Array.from({length: nums.length + 1}, ()=> []) // [[],[],[],[]]
        
        for(const [key, value] of map.entries()){
            buckets[value].push(key) // [[],[1],[4],[3]] 3 in this case is repeated 3 times
        }

        const result = []

        console.log(buckets)

        for(let i = buckets.length - 1; i >=0; i--){
            if(buckets[i].length > 0){
                for(const bucket of buckets[i]){
                    result.push(bucket)
                    if(result.length === k){
                        return result
                    }

                }
            }
        }
    }
}
