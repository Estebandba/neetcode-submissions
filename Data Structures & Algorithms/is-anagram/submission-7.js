class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if(s.length !== t.length) return false

        const sObject = {}
        const tObject = {}

        for(let i = 0; i < s.length; i++){
            if(sObject[s[i]]){
                sObject[s[i]] = sObject[s[i]] + 1
            } else {
                sObject[s[i]] = 1
            }

            if(tObject[t[i]]){
                tObject[t[i]] = tObject[t[i]] + 1
            } else {
                tObject[t[i]] = 1
            }
        }

        for(let i = 0; i < s.length; i++){
            if(sObject[s[i]] !== tObject[s[i]]){
                return false
            }
        }

        return true
    }
}
