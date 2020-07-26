class lru {
  constructor(size) {
    this.hash = {};
    this.size = size;
    this.length = 0;
  }
    
  put(e) {
    this.head = {
        "next": this.head,
        "value": e
    }
    if (!this.hash[e]) {
      if (this.length == this.size) {
        this.hash[this.tail.value] = null;
        this.tail = this.tail && this.tail.prev ? this.tail.prev : null;
      } else {
        this.length++;
      }
    } else {
      this.hash[e].prev = this.hash[e].prev && this.hash[e].prev.prev  ? this.hash[e].prev.prev : (this.length === 1 ? null: this.head);
    }
    this.hash[e] = this.head;
  }

  get() {
    let it = this.head;
    let result = [];
    while (it) {
      result.push(it.value);
      it = it.next;
    }

    return result;
  }
}

let cache = new lru(5):
cache.put(5);
console.log(cache.get()));
cache.put(5);
console.log(cache.get()));
cache.put(3);
console.log(cache.get()));
cache.put(2);
console.log(cache.get()));
cache.put(1);
console.log(cache.get()));
cache.put(4);
console.log(cache.get()));
cache.put(2);
console.log(cache.get()));
