class timeDictionary {
  constructor() {
    this.dict = {};
    this.validateKey = function(key) {
       if (!key || key.length) throw new "ArgumentOutOfRangeException";
    }
  }
  
  put(key, value) {
    validateKey(key);
    
    if (!dict[key]) {
      dict[key] = {
        "timestamp": 0,
        "values": {
          "0": value
        }
      };
      return;
    }
    
    if (dict[key].values[dict[key].timestamp] != value) {
      dict[key].timestamp++;
      dict[key][dict[key].timestamp] = value;
    }
  }
  
  get(key, time) {
    validateKey(key);
    
    if (!dict[key] || timestamp > dict[key].timestamp) throw new "ArgumentOutOfRangeException";
    return dict[key].values[dict[key].timestamp];
  }
}
