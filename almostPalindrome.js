function ap(n) {
  let modStart = 0;
  let modEnd = 0;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    let es = n[i + modStart];
    let ee = n[n.length - 1 - i - modEnd]
    if (es === ' ') {
      modStart++;
      i--;
      continue;
    }
    if (ee === ' ') {
      modEnd++;
      i--;
      continue;
    }
    
    if (es != ee) {
      return false;
    }
  }
  
  return true;
}

console.log(ap("a"));
console.log(ap("ab"));
console.log(ap("aba"));
console.log(ap("abba"));
console.log(ap("abc ba"));
