class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;

        while(left < right){
            let leftChar = s[left].toLocaleLowerCase()
            let rightChar = s[right].toLocaleLowerCase()

            if(/[^0-9a-z]/g.test(leftChar)){
                left++
                continue;
            }
            if(/[^0-9a-z]/g.test(rightChar)){
                right--
                continue;
            }

            if(leftChar !== rightChar){
                return false
            }

            left++
            right--
        }

        return true;
    }
}
