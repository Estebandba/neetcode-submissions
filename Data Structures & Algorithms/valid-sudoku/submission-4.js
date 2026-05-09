class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        const columns = new Map()
        const rows = new Map()
        const subBox = new Map()

        for(let row = 0; row < board.length; row++){
            for(let col = 0; col < board.length; col++){
                const cellValue = board[row][col]

                if(cellValue === '.') continue;

                const currentSubBoxKey = `${Math.floor(row / 3)},${Math.floor(col / 3)}`

                // Check if we have the cellValue in the column, row and the 3x3 sub boxes
                if(
                    rows.has(row) && rows.get(row).has(cellValue) ||
                    columns.has(col) && columns.get(col).has(cellValue) ||
                    subBox.has(currentSubBoxKey) && subBox.get(currentSubBoxKey).has(cellValue)
                ){
                    return false
                }

                // Check if we have the current colum, row, subBox initalised
                if(!rows.has(row)) rows.set(row, new Set())
                if(!columns.has(col)) columns.set(col, new Set())
                if(!subBox.has(currentSubBoxKey)) subBox.set(currentSubBoxKey, new Set())

                columns.get(col).add(cellValue)
                rows.get(row).add(cellValue)
                subBox.get(currentSubBoxKey).add(cellValue)
            }
        }
        return true;
    }
}
