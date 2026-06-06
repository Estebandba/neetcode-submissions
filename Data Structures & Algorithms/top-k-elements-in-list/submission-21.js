class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numMap = new Map();
        
        for(const num of nums){
            numMap.set(num, (numMap.get(num) || 0) + 1)
        }
        const freqArray = Array.from({length: nums.length + 1}, ()=>[])

        for(const [value, freq] of numMap){
            freqArray[freq].push(value)
        }

        const result = []

        for(let i = freqArray.length - 1; i >=0; i--){
            if(freqArray[i].length > 0){
                for(const num of freqArray[i]){
                    if(result.length === k){
                        return result;
                    }
                    result.push(num)
                }
            }
        }
        return result;
    }
}
