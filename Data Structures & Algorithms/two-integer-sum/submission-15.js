class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const iMap = new Map()

        for(let i = 0; i < nums.length; i++){
            const valueNeeded = target - nums[i]

            if(iMap.has(valueNeeded)){
                return [i, iMap.get(valueNeeded)]
            }
            iMap.set(nums[i], i)
        }
    }
}
