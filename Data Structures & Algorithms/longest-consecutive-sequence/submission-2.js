class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length === 0) return 0;

        const distinctNumbers = new Set(nums)
        let longestSequence = 0;

        for(const num of distinctNumbers){

            // Start of a sequence
            if(!distinctNumbers.has(num - 1)){

                let currentCount = 1;
                
                // check if we have the next number in the seq and add up to the count
                while(distinctNumbers.has(num + currentCount)){
                    currentCount+=1
                }

                longestSequence = Math.max(longestSequence, currentCount)
            }
        }

        return longestSequence;
    }
}
