class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        // I can create a static array
        const result = new Array(arr.length);
        let rightMax = -1;

        for(let i = arr.length - 1 ; i >= 0 ; i--){
            result[i] = rightMax;
            rightMax = Math.max(arr[i], rightMax)
        }
        return result;
    }
}
