class HashTable {
    #capacity
    #hashArray
    #hashArraySize
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.#capacity = capacity
        this.#hashArray = new Array(capacity).fill(null)
        this.#hashArraySize = 0;
    }

    /**
     * @param {string} key
     * return {number}
     */
    #hash(key){
        return key % this.#capacity
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    insert(key, value) {
        // 1. hash the key to find and index where to insetrt
        let index = this.#hash(key);
        
        while(true){
            // 2. insert the key/value pair in an empty space (addressing approach)
            if(this.#hashArray[index] == null){
                this.#hashArray[index] = {key, value}
                this.#hashArraySize+=1
                // 3. check the hash array size isn't greater than half the capacity. If it is, then resize the hash array
                if(this.#hashArraySize >= (this.#capacity / 2)){
                    this.resize()
                }
                return;
            // 4. update the value of the key if the key already exist
            } else if(this.#hashArray[index].key == key){
                this.#hashArray[index].value = value
                return;
            }
            index+=1
            index = index % this.#capacity
        }
        
    }

    /**
     * @param {number} key
     * @returns {number}
     */
    get(key) {
        // 1. hash the key to find it
        let index = this.#hash(key)
        // 2. check if the value exist and return it
        while(this.#hashArray[index] != null){
            if(this.#hashArray[index].key == key){
                return this.#hashArray[index].value 
            }
            index+=1
            index = index % this.#capacity
        }

        // 3. if value doesn't exist then return -1
        return -1
    }

    /**
     * @param {number} key
     * @returns {boolean}
     */
    remove(key) {

        if(this.get(key) === -1){
            return false
        }

        let index= this.#hash(key)

        while(true){
            if(this.#hashArray[index].key == key){
                this.#hashArray[index] = null
                this.#hashArraySize-=1
                return true;
            }
            index+=1
            index = index % this.#capacity
        }
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.#hashArraySize
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.#capacity
    }

    /**
     * @return {void}
     */
    resize() {
        
        const oldArray = this.#hashArray;
        this.#capacity = this.#capacity * 2; 
        const newArray = new Array(this.#capacity).fill(null)
        this.#hashArraySize = 0;
        this.#hashArray = newArray;

        for(let i=0; i < oldArray.length; i++){
            if(oldArray[i]){
                this.insert(oldArray[i].key, oldArray[i].value)
            }
        }
    }
}
