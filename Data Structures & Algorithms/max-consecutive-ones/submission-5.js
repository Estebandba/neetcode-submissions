class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {

        let max = 0; // 2
        let count = 0; // 2

        for(let i = 0 ; i < nums.length; i++){
            if(nums[i] === 0){
                max = Math.max(max, count) // 2
                count = 0
            } else {
                count++ //1 2 // 1 2 3
            }
        }

        return Math.max(max, count)
    }
}
