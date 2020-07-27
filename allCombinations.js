function getAll(a) {
  let paths = [];
  let signs = ["", "+", "-"];
  let q = [{"index": 0, "path": [a[0]]}];
  
  while (q.length) {
    let e = q.pop();
    
    if (e.index < a.length - 1) {
      for (let i = 0; i < signs.length; i++) {
        q.push({"index": e.index + 1, "path": e.path + signs[i] + a[e.index + 1]});
      }
    } else {
      paths.push(e.path);
    }
  }
    
  let result = [];
  for (let i = 0; i < paths.length; i++) {
    let sum = 0;
    let pluses = paths[i].split(signs[1]);
    for (let j = 0; j < pluses.length; j++) {
      let minuses = pluses[j].split(signs[2]);
      let mSum = minuses[0];
      for (let k = 1; k < minuses.length; k ++) {
        mSum -= minuses[k];
      }
      sum += mSum;
    }
  }
    
  return result;
}

console.log(getAll("121"));
