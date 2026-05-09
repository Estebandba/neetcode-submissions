class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        const result = new Array(arr.length)
        let greatestNumber = -1

        for(let i = arr.length - 1; i >=0 ; i--){
            result[i] = greatestNumber;
            greatestNumber = Math.max(greatestNumber, arr[i])
        }
        
        return result;
    }
}
