class DynamicArray {
    #capacity
    #length
    #array
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.#capacity = capacity
        this.#array = new Array(capacity)
        this.#length = 0
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.#array[i]
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.#array[i] = n
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if(this.#length == this.#capacity){
            this.resize()
        }
        this.#array[this.#length] = n
        this.#length+=1
    }

    /**
     * @returns {number}
     */
    popback() {
        const lastValue = this.#array[this.#length - 1]
        this.#array[this.#length - 1] = null
        this.#length-=1
        return lastValue
    }

    /**
     * @returns {void}
     */
    resize() {
        const oldArray = this.#array
        this.#capacity = this.#capacity * 2
        const newArray = new Array(this.#capacity)
        
        for(let i = 0; i < this.#length; i++){
            newArray[i] = oldArray[i]
        }
        this.#array = newArray;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.#length
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.#capacity
    }
}
