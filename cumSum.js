function cumSum(a) {
  let result = [];
  
  for (let i = 0; i < a.length; i++) {
    if (i === 0) {
      result.push(a[i]);
    } else {
      result.push(a[i] + result[i - 1]);
    }
  }

  return result;
}

console.log(cumSum([13, 34, 32, 232, 1, -2]));
