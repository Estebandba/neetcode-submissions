class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        const prefixArr = new Array(nums.length).fill(0)
        const postfixArr = new Array(nums.length).fill(0)

        prefixArr[0]= 1
        postfixArr[postfixArr.length - 1] = 1

        for(let i = 1 ; i < prefixArr.length; i++){
            // prefix  [1,1,2,8]
            // nums    [1,2,4,6]
            // prefixR [1,1,2,8]
            prefixArr[i] = prefixArr[i - 1] * nums[i - 1]
        }

        for(let i = postfixArr.length - 2; i >= 0; i--){
            // postfix  [48,24,6,1]
            // nums     [1,2,4,6]
            //
            // postfixR [48,24,6,1]
            postfixArr[i] = postfixArr[i + 1] * nums[i + 1] 
        }

        const result = new Array(nums.length).fill(0)
        for(let i = 0; i < result.length; i++){
            result[i] = postfixArr[i] * prefixArr[i]
        }

        return result;

    }
}
