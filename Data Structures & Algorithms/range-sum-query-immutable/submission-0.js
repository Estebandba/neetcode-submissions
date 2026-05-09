class NumArray {
    #prefixSumArr
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        const arr = new Array()
        let total = 0
        for(let n of nums){
            total+=n
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
        
        return this.#prefixSumArr[right] - (left > 0 ? this.#prefixSumArr[left - 1] : 0)

    }
}
