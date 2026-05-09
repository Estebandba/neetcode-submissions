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
        this.#hashArraySize = 0
    }

    /** 
     * @param {number} key
     * @return {number}
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

        // 1. hash the key
        let index = this.#hash(key)

        // 2. Use open addressing to handle collision

        while(true){
            
        // 2.1 Insert key/value pair into a empty space
            if(this.#hashArray[index] == null){
                
                this.#hashArray[index] = {key, value}
                this.#hashArraySize+=1

                if(this.getSize() >= (this.getCapacity() / 2)){
                    // resize the hashArray if the size is minimum half the capacity
                    this.resize()
                }
                return;
                // update the value of a key if the key already exist
            } else if(this.#hashArray[index].key == key){
                this.#hashArray[index].value = value
                return;
            }
            // increase the index checking if it gets out of bound
            index +=1
            index = index % this.#capacity
        }

    }

    /**
     * @param {number} key
     * @returns {number}
     */
    get(key) {
        let index = this.#hash(key)

        while(this.#hashArray[index] != null){
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
        
        // 1. check if the key exist in myhash array
        if(this.get(key) == -1){
            return false;
        } 
        
        
        // 2. hash the key to find the index
        let index = this.#hash(key)


        // 3. As here we already know that the key exist then loop through the elements
        while(true){

            if(this.#hashArray[index].key == key){
                this.#hashArray[index] = null
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
        
        // 1. copy the old array to a new constant
        // 2. double the current capacity
        // 3. create a new array with the new capacity and fill it with null and set it to the hash array
        // 4. reset the hash array size to 0
        // 5. insert the old array elements into the new array
        
        this.#capacity = this.#capacity * 2;
        let oldArray = this.#hashArray
        
        let newArray = new Array(this.#capacity).fill(null)
        this.#hashArraySize = 0;
        
        this.#hashArray = newArray;

        for(let i = 0; i < oldArray.length; i++){
            if(oldArray[i]){
                this.insert(oldArray[i].key, oldArray[i].value)
            }
        }
        
    }
}
