class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const operands = [];

        for(const token of tokens){

            if(operands.length >= 2 && isNaN(token)){
                const op2 = parseInt(operands.pop())
                const op1 = parseInt(operands.pop())
                let operationResult = null;

                if(token === '+'){
                    operationResult = op1 + op2;
                } else if(token === '-'){
                    operationResult = op1 - op2;
                } else if(token === '*'){
                    operationResult = op1 * op2
                } else if(token === '/'){
                    operationResult = Math.trunc(op1 / op2)
                }
                operands.push(operationResult)

            } else {
                operands.push(token)
            }

        }

        return operands[0]


    }
}
