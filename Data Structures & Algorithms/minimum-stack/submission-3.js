class MinStack {
    #stack
    #minStack

    constructor() {
        this.#stack = []
        this.#minStack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.#stack.push(val)

        let minValue = this.#minStack.length ? Math.min(this.#minStack[this.#minStack.length - 1], val) : val;

        this.#minStack.push(minValue)
    }

    /**
     * @return {void}
     */
    pop() {
        this.#stack.pop();
        this.#minStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.#stack[this.#stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.#minStack[this.#minStack.length - 1];
    }
}
