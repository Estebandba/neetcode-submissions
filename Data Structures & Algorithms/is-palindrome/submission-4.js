class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        let left = 0;
        let right = s.length - 1;

        while(left < right){
            const leftChar = s[left].toLowerCase()
            const rightChar = s[right].toLowerCase()

            if(/[^a-z0-9]/.test(leftChar)){
                left++
                continue;
            }
            if(/[^a-z0-9]/.test(rightChar)){
                right--
                continue;
            }

            if(leftChar !== rightChar){
                return false
            }

            right--
            left++
        }
        return true;
    }
}
