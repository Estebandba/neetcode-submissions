class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numsMap = new Map();

        for(let i=0 ; i < nums.length; i++){
            if(!numsMap.has(nums[i])){
                numsMap.set(nums[i], 1)
            } else {
                return true
            }
        }
        return false
    }
}
