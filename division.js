function divide(number, div) {
  if (!div) throw "ArgumentOutOfRangeException";
  
  if (!number) return 0;
  
  let neg = false;
  if (div < 0) {
    div = Math.abs(div);
    neg = !neg;
  }
  
  if (number < 0) {
    number = Math.abs(number);
    neg = !neg;
  }
  
  let result = 0;
  let counter = 0;
  while (result < number) {
    result += div;
    if (result <= number) {
      counter++;
    }
  }
  
  if (neg) {
    counter -= counter - counter;
  }
  
  return counter;
}

console.log(divide(0, 5));
console.log(divide(0, 0));
console.log(divide(5, 1));
console.log(divide(8, 2));
console.log(divide(15, 4));
