class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const iMap = new Map()

        for(let i = 0; i < nums.length; i++){
            const complement = target - nums[i]

            if(iMap.has(complement)){
                return [i, iMap.get(complement)]
            }
            iMap.set(nums[i], i)
        }
    }
}
