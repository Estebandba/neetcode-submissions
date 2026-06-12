class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        let left = 0
        let right = numbers.length - 1

        while(left < right){
            let total = numbers[left] + numbers[right]

            if(total > target){
                right--
                continue;
            }
            if(total < target){
                left++
                continue;
            }

            return [left + 1, right + 1]
        }
    }
}
