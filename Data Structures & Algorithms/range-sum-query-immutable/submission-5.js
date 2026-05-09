class NumArray {
    #prefixNums
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        let total = 0
        const prefixes = []
        for(let i = 0 ; i < nums.length; i++){
            total += nums[i]
            prefixes.push(total)
        }
        this.#prefixNums = prefixes;
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
         return this.#prefixNums[right] - (left > 0 ? this.#prefixNums[left - 1] : 0)
    }
}
