class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // check both ends of the string

        let stack = [];

        for(let i=0; i < s.length; i++){
            const char = s[i];

            if(char === '[' || char === '{' || char === '('){
                stack.push(char)
            } else {

                if(stack.length === 0) return false;
                
                // it is a closing bracket

                // get the element in the stack (should be an opening bracket)
                const top = stack[stack.length - 1]

                if((char === ']' && top === '[') ||
                    (char === ')' && top === '(') ||
                    (char === '}' && top === '{')
                    ){
                        stack.pop() // match found, remove from stack
                    } else{
                        // there's no match
                        return false
                    }

            }


        }

        return stack.length === 0;
    }
}
