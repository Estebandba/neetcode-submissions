class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const distincNums = new Set(nums)
        let total = 0

        for(const num of distincNums){
            if(!distincNums.has(num - 1)){
                let sequence = 0
                while(distincNums.has(num + sequence)){
                    sequence++
                }
                total = Math.max(total, sequence)
            }
        }
        return total
    }
}
