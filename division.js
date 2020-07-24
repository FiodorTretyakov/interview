function divide(number, div) {
  if (!div) throw "ArgumentOutOfRangeException";
  
  if (!number) return 0;
  
  let negMult = 1;
  if (div < 0) {
    div = Math.abs(div);
    negMult = -1;
  }
  
  if (number < 0) {
    number = Math.abs(number);
    negMult *= negMult;
  }
  
  let mults = [1];
  while (mults[mults.length - 1] * div < number) {
    mults.push(mults[mults.length - 1]  * 2);
  }

  let result = 0;
  while (number > 0) {
    if (number < mults[mults.length - 1] * div) {
      if (mults.length == 1) {
        break;
      }
      mults.pop();
      continue;
    }
    if (number === mults[mults.length - 1] * div) {
       result += mults[mults.length - 1];
       break;
    }
    number -= mults[mults.length - 1] * div;
    result += mults[mults.length - 1];
  }
  
  result *= negMult;
  
  return result;
}

console.log(divide(0, 5));
console.log(divide(5, 1));
console.log(divide(8, 2));
console.log(divide(15, 4));
