class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        
        let markerLeft = 0;
        let markerRight = 1
        let maxRight = 0;
        const result = []

        while(markerLeft < arr.length){
            if(markerLeft === arr.length - 1){
                result.push(-1)
                return result;
            }

            if(markerRight < arr.length){
                maxRight = Math.max(maxRight, arr[markerRight])
                markerRight++
            } else {
                result.push(maxRight)
                markerLeft++
                markerRight = markerLeft + 1
                maxRight = 0
            }
        }
    }
}
