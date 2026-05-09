class LRUCache {
    #capacity
    #cache
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.#capacity = capacity
        this.#cache = new Map()
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {

        if(this.#cache.has(key)){
            const value = this.#cache.get(key)
            this.#cache.delete(key)
            this.#cache.set(key, value)
            return value
        }
        return -1
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.get(key) !== -1){
            this.#cache.set(key, value)
            return;
        }

        // if(this.#cache.has(key)){
        //     this.#cache.delete(key)
        // }

        this.#cache.set(key, value)
        

        if(this.#cache.size > this.#capacity){
            this.#cache.delete(this.#cache.keys().next().value)
        }
    }
}
