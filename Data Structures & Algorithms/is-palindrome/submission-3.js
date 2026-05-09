class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // we can use two pointers to find this out

        let left = 0
        let right = s.length - 1

        while(left < right){

            const charLeft = s[left]
            const charRight = s[right]

            // ignore non-alphanumeric chars
            // make chars lower case

            if(/[^a-z0-9]$/i.test(charLeft)){
                left++
                continue;
            }

            if(/[^a-z0-9]$/i.test(charRight)){
                right--
                continue;
            }

            if(charLeft.toLocaleLowerCase() !== charRight.toLocaleLowerCase()){
                return false
            }

            left++
            right--
        }

        return true;
    }
}
