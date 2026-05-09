class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let count = 0;
        let max = 0

        for(const num of nums){
            if(num === 1){
                count++;
                max = Math.max(count, max)
            } else {
                count = 0
            }
        }
        return max;
    }
}
