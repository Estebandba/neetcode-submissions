class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        const row = new Map()
        const col = new Map()
        const squares = new Map()

        let celValue = null;
        let squareKey = null;

        for(let r = 0; r < board.length; r++){
            for(let c = 0 ; c < board.length; c++){
                celValue = board[r][c]

                if(celValue === '.') continue;

                squareKey = `${Math.floor(r / 3)},${Math.floor(c / 3)}`

                if(
                    row.has(r) && row.get(r).has(celValue) ||
                    col.has(c) && col.get(c).has(celValue) ||
                    squares.has(squareKey) && squares.get(squareKey).has(celValue)
                ){
                    return false;
                }

                if(!row.has(r)) row.set(r, new Set())
                if(!col.has(c)) col.set(c, new Set())
                if(!squares.has(squareKey)) squares.set(squareKey, new Set())

                row.get(r).add(celValue)
                col.get(c).add(celValue)
                squares.get(squareKey).add(celValue)
            }
        }
        return true;
    }
}
