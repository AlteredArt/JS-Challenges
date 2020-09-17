class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i ++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
            // console.log('hash', hash)
        }
        return hash
    }

    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
            this.data[address].push([key, value])
            // console.log('data:', this.data)
        } 
        this.data[address].push([key, value])
        return this.data
    }

    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i <currentBucket.length; i++ ) {
                if(currentBucket[i][0] === key) {
                    return currentBucket[i][1]
                }
            }
        }
        return undefined
    }

    keys() {
        const keysArray = [];
        for (let i = 0; i < this.data.length; i++) {
            if(this.data[i]) {
                keysArray.push(this.data[i][0][0])
            }
        }
        return keysArray
    }
}

const myHashTable = new HashTable(20);
console.log('myhashtable:', myHashTable)
console.log('hasykey:', myHashTable._hash('grapes'))
console.log("myhashtable:", myHashTable)
console.log('set:', myHashTable.set('grapes', 1000))
console.log('set:', myHashTable.set('apples', 50))
console.log('set:', myHashTable.set('oranges', 100))
console.log('set:', myHashTable.set('pineapples', 75))
console.log("myhashtable:", myHashTable)
console.log("get:", myHashTable.get('apples'))
console.log("keys:", myHashTable.keys())