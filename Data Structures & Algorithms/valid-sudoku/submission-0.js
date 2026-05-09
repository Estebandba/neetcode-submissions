class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        let rows = new Map()
        let cols = new Map()
        let squares = new Map()

        let val = null;

        for(let r= 0 ; r < board.length; r++){
            for(let c= 0 ; c < board[r].length; c++){
                val = board[r][c]

                const squareKey = `${Math.floor(r / 3)},${Math.floor(c / 3)}`; // similar to x/y coordinates (E.g. at row 2 and col 4)

                if(val === '.') continue;
                if(rows.get(r) && rows.get(r).has(val)) return false;
                if(cols.get(c) && cols.get(c).has(val)) return false;
                if(squares.get(squareKey) && squares.get(squareKey).has(val)) return false;

                if(!rows.has(r)) rows.set(r, new Set())
                if(!cols.has(c)) cols.set(c, new Set())
                if(!squares.has(squareKey)) squares.set(squareKey, new Set())

                rows.get(r).add(val)
                cols.get(c).add(val)
                squares.get(squareKey).add(val)
            }
        }
        return true;
    }
}
