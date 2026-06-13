class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        const sortedNums = nums.sort((a,b)=> a - b)

        const result = []

        for(let i = 0; i < sortedNums.length; i++){
            if(i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;

            let left = i + 1
            let right = sortedNums.length - 1

            while(left < right){
                let total = sortedNums[i] +  sortedNums[left] + sortedNums[right]
                if(total < 0){
                    left++
                    continue
                } else if(total > 0){
                    right--
                    continue
                } else {
                    result.push([sortedNums[i] ,  sortedNums[left] , sortedNums[right]])
                    left++
                    while(nums[left] === nums[left - 1] && left < right){
                        left++
                    }
                }
            }
        }

        return result

    }
}
