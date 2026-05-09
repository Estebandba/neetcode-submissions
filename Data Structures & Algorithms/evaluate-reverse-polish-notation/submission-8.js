class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {

        const stack = [];
        let i = 0;

        const operator = {
            '+' : '+',
            '-' : '-',
            '*' : '*',
            '/' : '/',
        }

        while(i < tokens.length){
            const value = tokens[i]
            if(operator[value] && stack.length){
                let total = 0;
                const op2 = parseInt(stack.pop())
                const op1 = parseInt(stack.pop())
            
                if(value === '+'){
                    total = op1 + op2
                } else if(value === '-'){
                    total = op1 - op2
                } else if(value === '*'){
                    total = op1 * op2
                } else if(value === '/'){
                    total = Math.trunc(op1 / op2)
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
