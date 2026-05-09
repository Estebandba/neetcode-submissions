class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        const map = new Map()

        for(let i=0; i < nums.length; i++){
            const numberToFinish= target - nums[i]

            // check if we have the number we need for the total in our hashmap
            if(map.has(numberToFinish)){
             return [i, map.get(numberToFinish)]   
            } else {
                 map.set(nums[i], i)
            }

        }
    }
}
