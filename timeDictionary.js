class timeDictionary {
  constructor() {
    this.dict = {};
    this.validateKey = function(key) {
       if (!key || !key.length) throw new "ArgumentOutOfRangeException";
    }
  }
  
  put(key, value) {
    this.validateKey(key);
    
    if (!this.dict[key]) {
      this.dict[key] = {
        "timestamp": 0,
        "values": {
          "0": value
        }
      };
      return;
    }
    
    if (this.dict[key].values[this.dict[key].timestamp] != value) {
      this.dict[key].timestamp++;
      this.dict[key][this.dict[key].timestamp] = value;
    }
  }
  
  get(key, time) {
    this.validateKey(key);
    
    if (!this.dict[key] || timestamp > this.dict[key].timestamp) throw new "ArgumentOutOfRangeException";
    return this.dict[key].values[this.dict[key].timestamp];
  }
}

let td = new timeDictionary();
td.put("a", 1)
console.log(td.get("a", 0))
td.put("a", 2)
console.log(td.get("a", 1))
td.put("a", 2)
console.log(td.get("a", 2))
