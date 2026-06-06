class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefix =  new Array()
        const sufix =  new Array()
        const result =  new Array()

        prefix[0] = 1;
        for(let i = 1; i < nums.length; i++){
            prefix[i] = prefix[i - 1] * nums[i - 1]
        }
        
        sufix[nums.length - 1] = 1;
        for(let i = nums.length - 2; i >= 0; i--){
            sufix[i] = sufix[i + 1] * nums[i + 1]
        }

        for(let i = 0; i < nums.length; i++){
            result[i] = prefix[i] * sufix[i]
        }

        return result;
    }
}
