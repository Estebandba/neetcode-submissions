class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack =[]

        const pairs = {
            ')' : '(',
            '}' : '{',
            ']' : '['
        }

        for(const char of s){
            if(char in pairs){

                if(stack.length === 0 || stack[stack.length - 1] !== pairs[char]) return false
                stack.pop()

            } else {
                // if it is an opening bracket then push to the stack
                stack.push(char)
            }
        }
        return stack.length === 0;
    }
}
