class HashTable {
    #capacity
    #hashArray
    #hashArraySize
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.#capacity = capacity;
        this.#hashArray = new Array(capacity).fill(null);
        this.#hashArraySize = 0;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    #hash(key){
        // Hash
        return key % this.#capacity;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    insert(key, value) {
        let index = this.#hash(key)

        while(true){
            // check if a new key/value pair is injected at an occupied index. If so, use open addressing
            if(this.#hashArray[index] == null){
                
                this.#hashArray[index] = {key, value}
                this.#hashArraySize+=1
                
                // we injected a new element above, check if we need to resize    
                if(this.getSize() >= (this.getCapacity() / 2)){
                    this.resize()
                }
                return;
            // update an existing key
            } else if(this.#hashArray[index].key == key){
                this.#hashArray[index].value = value;
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
        let index = this.#hash(key);

        while (this.#hashArray[index] != null){

            if(this.#hashArray[index].key == key){        
                return this.#hashArray[index].value
            }

            index+=1
            index = index % this.#capacity;
        }
        return -1
    }

    /**
     * @param {number} key
     * @returns {boolean}
     */
    remove(key) {

        if(this.get(key) == -1){
            return false;
        }

        let index = this.#hash(key)

        while(true){
            if(this.#hashArray[index].key == key){
                this.#hashArray[index] = null;
                this.#hashArraySize -= 1
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
        return this.#hashArraySize;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.#capacity;
    }

    /**
     * @return {void}
     */
    resize() {
        this.#capacity = this.#capacity * 2
        const oldArray = this.#hashArray;
        
        const newArray = new Array(this.#capacity).fill(null)
        this.#hashArraySize = 0;

        this.#hashArray = newArray;
        
        for(let i=0; i < oldArray.length; i++){
            if(oldArray[i]){
                // we need to rehash
                this.insert(oldArray[i].key, oldArray[i].value)
            }
        }
        
    }
}
