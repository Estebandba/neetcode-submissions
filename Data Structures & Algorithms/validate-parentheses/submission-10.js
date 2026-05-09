class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        if(s.length <= 1) return false;

        const stack = []

        for(const char of s){
            if(char === ']' || char === ')' || char === '}'){

                if(stack.length === 0) return false

                if(
                    char === ']' && stack[stack.length - 1] === '[' ||
                    char === ')' && stack[stack.length - 1] === '(' ||
                    char === '}' && stack[stack.length - 1] === '{'
                ){
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
