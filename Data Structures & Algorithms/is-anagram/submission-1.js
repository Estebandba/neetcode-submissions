class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // they have to be the same length
        // they have to have the same number of letters

        /**
         * { a:2, b:4 } -> t
         * { a:2, b:4 } -> s
         */

        if(s.length !== t.length) return false

        const mapS = new Map()
        const mapT = new Map()

        for(let i = 0; i < s.length; i++){
            if(mapS.has(s[i])){
                mapS.set(s[i], mapS.get(s[i]) + 1)
            } else{
                mapS.set(s[i], 1)
            }
        }

        for(let i = 0; i < t.length; i++){
            if(!mapS.has(t[i])){
                return false
            }
            if(mapT.has(t[i])){
                mapT.set(t[i], mapT.get(t[i]) + 1)
            } else {
                mapT.set(t[i], 1)
            }
        }

        for(let i = 0; i < t.length; i++){
            const key = t[i]
            if(mapS.get(key) !== mapT.get(key)) return false
        }

        return true;
    }
}
