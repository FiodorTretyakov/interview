function depthSum(n, m) {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    if (!n[i].length) {
      sum += n[i] * m;
    } else {
      sum += depthSum(n[i], m + 1);
    }
  }
  
  return sum;
}

console.log(depthSum([1, [2, 3, 5], 3, [[3], 3, 4], [5]], 1));
