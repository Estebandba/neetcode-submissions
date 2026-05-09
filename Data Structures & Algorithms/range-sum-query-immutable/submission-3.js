class NumArray {
    #prefixSumArr
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        const arr = []
        let total = 0
        for(let i = 0; i < nums.length; i++){
            total+=nums[i]
            arr.push(total)
        }
        this.#prefixSumArr = arr;
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        // 1. we need to have the precomputed prefixes
        // 2. We need to find the sum from left to right
        const leftValue = left > 0 ? this.#prefixSumArr[left - 1] : 0
        return this.#prefixSumArr[right] - leftValue

    }
}
