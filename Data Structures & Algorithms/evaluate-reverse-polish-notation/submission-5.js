class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {

        const stack = [];
        let i = 0;

        while(i < tokens.length){
            const value = tokens[i]
            if(value === '+' || value === '-' || value === '*' || value === '/' && stack.length){
                let total = 0;
                const op2 = stack.pop()
                const op1 = stack.pop()
                
                if(value === '+'){
                    total = Math.trunc(op1) + Math.trunc(op2)
                } else if(value === '-'){
                    total = Math.trunc(op1) - Math.trunc(op2)
                } else if(value === '*'){
                    total = Math.trunc(op1) * Math.trunc(op2)
                } else if(value === '/'){
                    total = Math.trunc(Math.trunc(op1) / Math.trunc(op2))
                }

                stack.push(total)

            } else {
                stack.push(value)
            }

            i++
        }

        return stack.length ? stack[stack.length - 1] : 0
    }
}
