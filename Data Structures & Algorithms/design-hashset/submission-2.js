class MyHashSet {
    constructor() {
        this.set = [];
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        if (this.contains(key)) return;

        console.log(key)
        this.set.push(key);
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const index = this.set.indexOf(key);
        if (index > -1) {
            console.log('splice', key, index)
            this.set.splice(index, 1);
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        console.log('contains', this.set)
        return this.set.includes(key);
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
