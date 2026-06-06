class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // const map = new Map()
        const set = new Set()

        for(const num of nums){
            if(set.has(num)){
                return true
            }
            set.add(num)
        }
        return false;
    }
}
