class timeDictionary {
  constructor() {
    this.dict = {};
  }
  
  change(key, value) {
    if (!key) throw new "ArgumentOutOfRangeException";
    
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
}
