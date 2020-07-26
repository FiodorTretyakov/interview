function add(a, b){
  let tail = 0;
  let result = 0;
  let i = 0;
  let mult = 1;
  while (a.length > i || b.length > i || tail) {
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

function addFlotHelp(a, b){
  let tail = 0;
  let result = 0;
  let i = (a.length > b.length ? a.length : b.length) - 1;
  let mult = 1;
  while (i >= 0 || tail) {
    let sum = tail;
    tail = 0;
    if (a.length > i) {
      sum += parseInt(a[i]);
    }
    if (b.length > i) {
      sum += parseInt(b[i]);
    }
    if (sum >= 10) {
      tail = 1;
      sum -= 10;
    }
    
    result += sum * mult;
    i--;
    mult *= 10;
  }
  
  return result;
}

function addFloat(a, b) {
  let aFull = a.split(".");
  let bFull = b.split(".");
  
  let sum = add(aFull[0], bFull[0]);
  
  if (aFull.length === 2) {
    if (bFull.length === 2) {
      let rest = addFlotHelp(aFull[1], bFull[1]) + "";
      if (rest.length > aFull[1].length && rest.length > bFull[1].length) {
        sum += parseInt(rest[0]);
        sum += "." + rest.substr(1, rest.length - 1);
      } else {
        sum += "." + rest;
      }
    } else {
      sum += "." + aFull[1];
    }
  } else {
    sum += "." + bFull[1];
  }
  
  return sum;
}

console.log(addFloat("2323.343", "8843.3311"));
console.log(add("23443", "3438761"));
