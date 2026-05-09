class DynamicArray {
    #capacity
    #array
    #arraySize
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.#capacity = capacity
        this.#array = new Array(capacity)
        this.#arraySize = 0
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
        if(this.#arraySize === this.#capacity){
            this.resize()
        }
        this.#array[this.#arraySize] = n
        this.#arraySize ++

    }

    /**
     * @returns {number}
     */
    popback() {
        const elementPopped = this.#array[this.#arraySize - 1]
        this.#array[this.#arraySize - 1] = null
        this.#arraySize -=1
        return elementPopped;
    }

    /**
     * @returns {void}
     */
    resize() {
        this.#capacity = this.#capacity * 2
        const oldArray = this.#array;
        const newArray = new Array(this.#capacity)

        for(let i =0; i < this.#arraySize; i++){    
            newArray[i] = oldArray[i]
        }

        this.#array = newArray;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.#arraySize
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.#capacity
    }
}
