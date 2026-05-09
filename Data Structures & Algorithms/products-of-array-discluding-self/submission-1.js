class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result = []
        let i = 0

        while(i < nums.length){
            let currentMul = 1

            for(let j = 0; j < nums.length; j++){
                if(j !== i){
                    currentMul*= nums[j]
                }
                if(j === nums.length - 1){
                    result.push(currentMul)
                }
            }
            i++
        }

        return result;
    }
}
