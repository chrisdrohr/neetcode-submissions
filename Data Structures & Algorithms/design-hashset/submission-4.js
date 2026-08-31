class MyHashSet {
    constructor() {
        this.size = 769; // Prime number reduces collisions
        this.buckets = Array.from({ length: this.size }, () => []);
    }

    hash(key) {
        return key % this.size;
    }

    getBucket(key) {
        const index = this.hash(key);
        return this.buckets[index];
    }
    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        const bucket = this.getBucket(key);
        if (!bucket.includes(key)) {
            bucket.push(key);
        }
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const bucket = this.getBucket(key);
        const keyIndex = bucket.indexOf(key);
        if (keyIndex !== -1) {
            bucket.splice(keyIndex, 1);
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        return this.getBucket(key).includes(key);
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
