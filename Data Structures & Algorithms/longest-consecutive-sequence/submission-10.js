class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        const distinctNums = new Set(nums)
        let max =0;

        for(const num of distinctNums){
            if(!distinctNums.has(num - 1)){ // start of a sequence
                let count = 0;
                while(distinctNums.has(num + count)){
                    count+=1
                }
                max= Math.max(max, count)
            }
        }

        return max;
    }
}
