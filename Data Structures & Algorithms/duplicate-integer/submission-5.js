class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = new Map()
        // const set = new Set()

        for(const num of nums){
            if(map.has(num)){
                return true
            }
            map.set(num, num)
        }
        return false;
    }
}
