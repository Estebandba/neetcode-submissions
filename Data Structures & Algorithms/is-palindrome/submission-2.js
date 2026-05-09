class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // A valid palindrome is when you reverse a string and it is the same as before
        // this can be solved using a two pointers execution

        let left = 0
        let right = s.length - 1

        while(left < right){
            const leftValue = s[left]
            const rightValue = s[right]
            // ignore alphanumeric chars
            // handle case sensitivity
            if(/[^a-z0-9]$/i.test(leftValue)){
                left++
                continue;
            }
            if(/[^a-z0-9]$/i.test(rightValue)){
                right--
                continue;
            }

            if(leftValue.toLocaleLowerCase() !== rightValue.toLocaleLowerCase()){
                return false
            }

            right--
            left++
        }
        return true;
    }
}
