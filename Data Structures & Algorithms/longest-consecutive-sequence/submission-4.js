class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        const distincNums = new Set(nums)

        let max = 0;

        if(nums.length === 0) return 0;

        for(const num of distincNums){
            
            let count = 0;

            while(distincNums.has(num + count)){
                count+=1
            }

            max = Math.max(count, max)
        }

        return max;
    }
}
