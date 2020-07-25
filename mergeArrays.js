function merge(a) {
  let left = a.length;
  let result = [];
  let ind = {};
  while (left) {
    let min = null;
    let minInd = null;
    for (let i = 0; i < a.length; i++) {
      if (!ind[i]) {
        ind[i] = 0;
      }
      if (ind[i] < a[i].length) {
        let e = a[i][ind[i]];
        if (min === null || e < min) {
          min = e;
          minInd = i;
        }
      }
    }
    
    result.push(min);
    ind[minInd]++;
    if (ind[minInd] === a[minInd].length) {
      left--;
    }
  }
  
  return result;
}

console.log(merge([[1,3,5,7], [2,4,5,7], [3,5,6]]));
