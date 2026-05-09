class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // I can apply prefixes and suffixes

        const preList = new Array(nums.length)
        const suList = new Array(nums.length)
        const result = new Array(nums.length)

        preList[0] = 1
        for(let i= 1; i < nums.length; i++){
            preList[i] = preList[i - 1] * nums[i - 1]
        }

        suList[suList.length - 1] = 1
        for(let i = nums.length - 2; i >=0; i--){
            suList[i] = suList[i + 1] * nums[i + 1]
        }

        for(let i = 0; i < nums.length; i++){
            result[i] = preList[i] * suList[i]
        }

        return result;
    }
}
