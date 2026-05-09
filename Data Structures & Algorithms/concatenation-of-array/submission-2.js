class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {

        const array = []

        for(let i = 0; i < nums.length; i++){
            array.push(nums[i])
        }
        for(let i = 0; i < nums.length; i++){
            array.push(nums[i])
        }

        return array
    }
}
