class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const resultIndices = new Map()

        for(let i = 0 ; i < nums.length; i++){
            const currentNumber = nums[i]
            const complement = target - currentNumber

            if(resultIndices.has(complement)){
                return [resultIndices.get(complement), i]
            } 
            
            resultIndices.set(currentNumber, i)
            
        }
        return []
    }
}
