class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        let left = 0
        let right = numbers.length -1

        while(left < right){
            // check for repeated numbers
            let leftValue = numbers[left]
            let rightValue = numbers[right]
            
            const total = rightValue + leftValue

            if(total > target){
                right--
                continue
            }

            if(total < target){
                left++
                continue;
            }

            if(total === target){
                return [left + 1, right + 1]
            }
        }
    }
}
