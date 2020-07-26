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
    this.hash[e] = this.head;
    if (!this.hash[e])) {
      if (this.length == this.size) {
        this.tail = this.tail && this.tail.prev ? this.tail.prev : null; 
      }
    } else {
      this.hash[e].prev = this.hash[e].prev && this.hash[e].prev.prev  ? this.hash[e].prev.prev : (this.length === 1 ? null: this.head);
    }
  }
}
