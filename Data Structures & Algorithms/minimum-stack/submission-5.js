class MinStack {

    #stack
    #length
    #min
    #minLength

    constructor() {
        this.#stack = []
        this.#length = 0
        this.#min = []
        this.#minLength = 0
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        // push val into the last position of the stack
        // increment length
        // In each push always check for the non-removed min element of the stack

        // [...nextMinVal, minVal]
        if(this.#minLength && this.#min[this.#minLength - 1] !== null){
            this.#min[this.#minLength] = Math.min(val, this.#min[this.#minLength - 1]) // [10, 5, 5]
        } else {
            this.#min[this.#minLength] = val
        }

        this.#minLength+=1
        this.#stack[this.#length] = val
        this.#length+=1
    }

    /**
     * @return {void}
     */
    pop() {
        // will alwaus be called into non-empty stacks
        // remove element at the last position of the stack
        // decrement length
        // update min value
        this.#stack[this.#length - 1] = null;
        this.#length-=1
        this.#min[this.#minLength - 1] = null // [2,null]
        this.#minLength-=1
    }

    /**
     * @return {number}
     */
    top() {
        // get the last element of the stack
        return this.#stack[this.#length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.#min[this.#minLength - 1]
    }
}
