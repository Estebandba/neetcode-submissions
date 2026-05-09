class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {

        const result = []
        let count = 0

        for(const operation of operations){
            if(!isNaN(operation)){
                const number = parseInt(operation)
                result.push(number)
                count+= number
            } else if(operation === '+'){
                const previousToLastScore = result.length > 1 ?  result[result.length - 2] : 0
                const lastScore = result[result.length - 1]
                const totalScore = previousToLastScore + lastScore
                result.push(totalScore)
                count+=totalScore
            } else if(operation === 'D'){
                const doubleScore = result[result.length - 1] * 2
                result.push(doubleScore)
                count+= doubleScore
            } else if (operation === 'C'){
                const numberRemoved = result.pop()
                count-=numberRemoved
            }
        }

        return count;

    }
}
