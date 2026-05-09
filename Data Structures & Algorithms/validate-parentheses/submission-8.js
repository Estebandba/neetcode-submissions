class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        const map = {
            '}': '{',
            ')': '(',
            ']': '[',
        }

        const stack = []

        for(let char of s){
            if(char in map){
                // it is a closing tag
                if(stack.length == 0 || map[char] !== stack[stack.length - 1]) return false;
                stack.pop()
            } else {
                // it is a open tag
                stack.push(char)
            }
        }

        return stack.length === 0
    }
}
