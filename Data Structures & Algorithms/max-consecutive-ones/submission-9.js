class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let count = 0;
        let max = 0

        for(const num of nums){
            count = num === 1 ? count + 1 : 0
            max = Math.max(count, max)
        }
        return max;
    }
}
