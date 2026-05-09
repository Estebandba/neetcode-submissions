class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        const map = new Map()

        for(let i=0; i < nums.length; i++){
            const complement= target - nums[i]

            // check if we have the number we need for the total in our hashmap
            if(map.has(complement)){
             return [i, map.get(complement)]   
            } else {
                 map.set(nums[i], i)
            }

        }
    }
}
