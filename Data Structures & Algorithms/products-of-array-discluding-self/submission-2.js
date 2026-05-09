class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        const result = new Array(nums.length)
        const prefix = new Array(nums.length)
        const sufix = new Array(nums.length)


        prefix[0] = 1
        sufix[nums.length - 1] = 1

        for(let i = 1; i < nums.length; i++){
            // prefix[1] = nums[1 - 1] * prefix[1-1] -> [1, 1 * 1]
            // prefix[2] = nums[2 -1] * prefix[2-1] -> [1, 1, 2 * 1] 
            // prefix[3] = nums[3 -1] * prefix[3-1] -> [1, 1, 2, 4 * 2]
            // prefix ===  [1, 1, 2, 8]
            prefix[i] = nums[i - 1] * prefix[i - 1]
        }

        for(let i = nums.length - 2; i>=0; i--){
            // sufix[2] = nums[2 + 1] * suffix[2 + 1] // [x, x, 6 * 1, 1]
            // sufix[1] = nums[1 + 1] * suffix[1 + 1] // [x, 4 * 6, 6, 1]
            // sufix[0] = nums[0 + 1] * suffix[0 + 1] // [2 * 24, 24, 6, 1]
            // sufix === [48, 24, 6, 1]
            sufix[i] = nums[i + 1] * sufix[i + 1]
        }

        for(let i = 0 ; i < nums.length ; i++){
            result[i] = prefix[i] * sufix[i]
        }
        return result;
    }
}
