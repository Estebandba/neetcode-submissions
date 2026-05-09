class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        const map = new Map()

        for(const num of nums){
            if(map.has(num)){
                map.set(num, map.get(num) + 1)
            } else {
                map.set(num, 1)
            }
        }

        console.log(map, 'map')

        // {1:1, 2:2, 3:3}
        // Array.from(map.entries()) [[1,1], [2,2], [3,3]]
        const mapAsArray = Array.from(map.entries())
        const frequencySorted = Array.from({ length: nums.length + 1}, ()=> [])
        

        console.log(mapAsArray, 'mapAsArray')
        
        for(let i = 0; i < mapAsArray.length; i++){
            const num = mapAsArray[i][0];
            const freq = mapAsArray[i][1];

            frequencySorted[freq].push(num) // [[1],[2],[3]]
        }

        console.log(frequencySorted, 'frequencySorted')

        const result = []
        for(let i = frequencySorted.length - 1 ; i >= 0; i--){
            if(frequencySorted[i].length > 0){
                for(const num of frequencySorted[i]){
                    result.push(num)
                    if(result.length === k){
                        return result;
                    }
                }
            }
        }

        console.log(result, 'result')

        return result;
    }
}
