class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const distincNums = new Set(nums)

        let max = 0;

        for(const num of distincNums){
            if(!distincNums.has(num - 1)){
                let count = 0
                while(distincNums.has(num + count)){
                    count++
                }
                max = Math.max(count, max)
            }
        }

        return max;
    }
}
