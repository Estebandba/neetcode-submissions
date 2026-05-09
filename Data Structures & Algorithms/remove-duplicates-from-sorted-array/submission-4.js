class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let left = 0;
        for(let i = 0; i < nums.length; i++){
            if(nums[i] !== nums[i + 1]){
                nums[left] = nums[i]
                left++
            }
        }
        return left
    }
}


// array [1, 2, 3, 4, 4]
//                    ml mr
//                    left