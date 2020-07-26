class lru {
  constructor(size) {
    this.hash = {};
    this.size = size;
    this.length = 0;
  }
    
  put(e) {
    if (!this.head) {
      this.head = {
        "value": e
      };
      this.tail = this.head;
      this.hash[e] = this.head;
      return;
    }
    
    if (this.hash[e]) {
      if (this.hash[e].prev) {
        if (this.hash[e].next) {
          this.hash[e].prev.next = this.hash[e].next;
          this.hash[e].next.prev = this.hash[e].prev;
        } else {
          this.tail = this.hash[e].prev;
        }
      } else {
        return;
      }
    } else {
      if (this.length == this.size) {
        let taildId = this.tail.value;
        if (this.tail.prev) {
          this.tail = this.tail.prev;
        }
        this.hash[tailId] = null;
      } else {
        this.length++;
      }
      this.head = {
        "next": this.head,
        "value": e
    }
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

let cache = new lru(5);
cache.put(5);
console.log(cache.get());
cache.put(5);
console.log(cache.get());
cache.put(3);
console.log(cache.get());
cache.put(2);
console.log(cache.get());
cache.put(1);
console.log(cache.get());
cache.put(4);
console.log(cache.get());
cache.put(2);
console.log(cache.get());
