class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        const distinctNums = new Set(nums)
        let max = 0;
        for(const num of distinctNums){
            let count = 0;

            if(!distinctNums.has(num - 1)){
                
                while(distinctNums.has(num + count)){
                    count+=1;
                }
            }

            max = Math.max(max, count)

        }
        return max;
    }
}
