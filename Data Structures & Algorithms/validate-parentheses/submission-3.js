class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack =[]

        for(let i = 0 ; i < s.length ; i++){

            const char = s[i]

            if(
                char === '{' ||
                char === '(' ||
                char === '['
            ){
                stack.push(char)
            } else {
                // If I don't have any element then there is no open bracket
                if(stack.length === 0) return false;

                // peek/top last element of the stack
                const openedBracket = stack[stack.length - 1]

                if(
                    openedBracket === '{' && char === '}' ||
                    openedBracket === '(' && char === ')' ||
                    openedBracket === '[' && char === ']'
                ){
                    //remove the latest opened bracket to check the next one
                    stack.pop()
                } else {
                    return false;
                }
            }

        }

        // If stack is empty then every element was popped because every element matched
        return stack.length === 0;
    }
}
