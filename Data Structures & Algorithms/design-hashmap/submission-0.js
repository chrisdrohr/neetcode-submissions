class MyHashMap {
    constructor() {
        this.size = 769;
        this.buckets = Array.from({ length: this.size }, () => []);
    }
    hash(key) {
        return key % this.size;
    }
    getBucket(key) {
        const hash = this.hash(key);
        return this.buckets[hash];
    }
    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        const bucket = this.getBucket(key);
        for (const pair of bucket) {
            if (pair[0] === key) {
                pair[1] = value;
                return;
            }
        }

        bucket.push([key, value])
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const bucket = this.getBucket(key);
        for (const pair of bucket) {
            if (pair[0] === key) {
                return pair[1]
            }
        }

        return -1
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const bucket = this.getBucket(key);
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1)
                return;
            }
        }
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
