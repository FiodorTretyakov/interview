class Tracker {
  constructor() {
    this.servers = {};
  }
  
  allocate(name) {
    if (!name || !name.length) throw new "Argument out of range"; 
    
    let lastChar = name[name.length - 1];
    if (lastChar >= '0' && lastChar <= '9') throw new "Numbers can't be used in the end of a name";
    
    let index;
    if (!this.servers[name]) {
      this.servers[name] = [1];
      index = 1;
    } else {
      index = nextServerNumber(this.servers[name]);
      this.servers[name].push(index);
    }
    return name + index;
  }
  
  deallocate(name) {
    if (!name || !name.length) throw new "Argument out of range";
    
    let id = [];
    for (let i = name.length - 1; i >=0; i--) {
      let char = name[i];
      if (char >= '0' && char <= '9') {
        id.unshift(char);
      } else {
        break;
      }
    }
    
    if (!id) {
      throw new "Argument out of range";
    }
    
    name = name.substr(0, name.length - id.length);
    if (!this.servers[name]) {
        throw new "Argument out of range";
    }
    
    this.servers[name] = this.servers[name].filter(s => id != s);
    
    return null;
  }
}


function nextServerNumber(data) {
  if (data.length === 0) return 1;
  
  data = data.sort();
  
  for (let i = 0; i < data.length; i++) {
    if (data[i] != i + 1) {
      return i + 1;
    }
  }
  
  return data.length + 1;
}


console.log(nextServerNumber([5, 3, 1]));
console.log(nextServerNumber([5, 4, 1, 2]));
console.log(nextServerNumber([3, 2, 1]));
console.log(nextServerNumber([2, 3]));
console.log(nextServerNumber([]));

let tracker = new Tracker();
console.log(tracker.allocate("apibox"));
console.log(tracker.allocate("apibox"));
console.log(tracker.deallocate("apibox1"));
console.log(tracker.allocate("apibox"));
console.log(tracker.allocate("sitebox"));
