class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rowMap = new Map()
        const colMap = new Map()
        const subboxMap = new Map()

        for(let row = 0; row < board.length; row++){
            for(let col = 0 ; col < board.length; col++){

                const value = board[row][col];

                if(value === '.') continue;

                const subboxKey = `${parseInt(row/3)},${parseInt(col/3)}`


                if(
                    rowMap.has(row) && rowMap.get(row).has(value) ||
                    colMap.has(col) && colMap.get(col).has(value) ||
                    subboxMap.has(subboxKey) && subboxMap.get(subboxKey).has(value)
                ){
                    return false;
                }

                if(!rowMap.has(row)){
                    rowMap.set(row, new Set())
                }
                if(!colMap.has(col)){
                    colMap.set(col, new Set())
                }
                if(!subboxMap.has(subboxKey)){
                    subboxMap.set(subboxKey, new Set())
                }

                rowMap.get(row).add(value)
                colMap.get(col).add(value)
                subboxMap.get(subboxKey).add(value)
            }
        }
        return true;
    }
}
