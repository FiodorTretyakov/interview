function add(a, b){
  let tail = 0;
  let result = 0;
  let i = 0;
  let mult = 1;
  while (a.length > i || b.length > i) {
    let sum = tail;
    tail = 0;
    if (a.length > i) {
      sum += parseInt(a[a.length - i - 1]);
    }
    if (b.length > i) {
      sum += parseInt(b[b.length - i - 1]);
    }
    if (sum >= 10) {
      tail = 1;
      sum -= 10;
    }
    
    result += sum * mult;
    i++;
    mult *= 10;
  }
  
  return result;
}


console.log(add("23443", "3438761"));
