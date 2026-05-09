class NumArray {
    #prefixes
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.#prefixes = []
        let total = 0;

        for(const num of nums){
            total+=num
            this.#prefixes.push(total)
        }
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {

        return this.#prefixes[right] - (left > 0 ? this.#prefixes[left - 1] : 0)
    }
}
