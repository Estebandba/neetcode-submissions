class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const pMap = {
            '}':'{',
            ']':'[',
            ')':'('
        }
        const stack = []

        for(const char of s){

            if(pMap[char]){
                if(stack.length === 0) return false;
                
                if(stack[stack.length - 1] === pMap[char]){
                    stack.pop()
                } else {
                    return false
                }
                
            } else {
                stack.push(char)
            }

        }
        return stack.length === 0;
    }
}
