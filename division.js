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
  
  let result = 0;
  let counter = 1;
  do {
    result += counter * div;
  } while (result < number) {
      counter *= 2;
  }

  let result = 0;
  while (number > 0) {
    if (number < result) {
      result /= 2;
      continue;
    }
    if (number === result) {
      return result + counter;
    }
    number -= result / 2;
    result += --counter;
  }
  
  counter *= negMult;
  
  return counter;
}

console.log(divide(0, 5));
console.log(divide(0, 0));
console.log(divide(5, 1));
console.log(divide(8, 2));
console.log(divide(15, 4));
