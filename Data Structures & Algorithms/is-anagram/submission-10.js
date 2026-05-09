class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        // same letters and same frequency
        // 1. count frequency
        // 2. map them to see if they have the same letters and frequency

        if(s.length !== t.length) return false

        const mapS = new Map()
        const mapT = new Map()

        for(let i = 0 ; i < s.length; i++){
            mapS.set(s[i], (mapS.get(s[i]) || 0) + 1)
            mapT.set(t[i], (mapT.get(t[i]) || 0) + 1)
        }

        for(const char of s){
            if(mapS.get(char) !== mapT.get(char)){
                return false
            }
        }

        return true;
    }
}
