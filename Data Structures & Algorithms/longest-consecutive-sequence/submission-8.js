class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const distinctNums = new Set(nums)

        let max = 0
        let count = 0
        let numberMarker = null;

        for(const num of Array.from(distinctNums).sort((a,b) => a - b)){
            if(numberMarker === null || num === numberMarker + 1){
                count+=1
            } else {
                count = 1
            }

            numberMarker = num;
            max = Math.max(count, max)
        }

        return max;
    }
}
