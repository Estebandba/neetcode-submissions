class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // they have to have the same characters no matter the order

        if(s.length !== t.length) return false;
        
        const mapS = new Map()
        const mapT = new Map()

        for(let i = 0 ; i < s.length ; i++){
            if(mapS.has(s[i])){
                mapS.set(s[i], mapS.get(s[i]) + 1)
            } else {
                mapS.set(s[i], 1)
            }
            if(mapT.has(t[i])) {
                mapT.set(t[i], mapT.get(t[i]) + 1)
            } else {
                mapT.set(t[i], 1)
            }
        }

        for(let i = 0; i < s.length; i++){
            if(mapS.get(s[i]) !== mapT.get(s[i])){
                return false
            }
        }

        return true
    }
}
