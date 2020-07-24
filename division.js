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
  
  let mult = 1;
  let max = mult * div;
  while (max < number) {
    mult *= 2;
    max = mult * div;
  }

  let result = 0;
  while (number > 0) {
    if (number < max) {
      if (mult == 1) {
        break;
      }
      mult /= 2;
      max /= 2;
      continue;
    }
    if (number === max) {
       result += mult;
       break;
    }
    number -= max;
    result += mult;
  }
  
  result *= negMult;
  
  return result;
}

console.log(divide(0, 5));
console.log(divide(5, 1));
console.log(divide(8, 2));
console.log(divide(15, 4));
