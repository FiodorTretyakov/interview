function merge(n) {
  if (!n.length) return [];
  n = n.sort(function(a, b) {
    return a[0] - b[0];
  });
        
  let result = [n[0]];
  for (let i = 1; i < n.length; i++) {
    if (n[i][0] >= result[result.length - 1][0] && n[i][0] <= result[result.length - 1][1] || result[result.length - 1][1] <= n[i][1] && result[result.length - 1][0] >= n[i][1]) {
      result[result.length - 1][0] = result[result.length - 1][0] <= n[i][0] ? result[result.length - 1][0] : n[i][0];
      result[result.length - 1][1] = result[result.length - 1][1] >= n[i][1] ? result[result.length - 1][1] : n[i][1];
    } else {
      result.push(n[i]);
    }
  }

  return result;
}

console.log(merge([[1,5], [17, 21], [4, 11], [5, 18], [3, 13], [19, 22], [31, 33]]));
