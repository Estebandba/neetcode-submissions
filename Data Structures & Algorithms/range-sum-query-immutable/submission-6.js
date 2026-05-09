class NumArray {
    #array
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        const prefixList = []
        let total = 0
        
        for(let i = 0; i < nums.length; i++){
            total+= nums[i]
            prefixList.push(total)
        }
        
        this.#array = prefixList;
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        return this.#array[right] - (left > 0 ? this.#array[left - 1] : 0)
    }
}
