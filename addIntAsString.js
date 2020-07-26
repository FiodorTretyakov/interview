function add(a, b){
  let tail = 0;
  let result = 0;
  let i = 0;
  while (a.length || b.length) {
    let sum = tail;
    tail = 0;
    if (a.length > i) {
      sum += a[a.length - i];
    }
    if (b.length > i) {
      sum += b[b.length - i];
    }
    if (sum >= 10) {
      tail = 1;
      sum -= 10;
    }
    
    result += 10 * (i + 1);
  }
  
  return result;
}


console.log(add("23443", "3438761"));
