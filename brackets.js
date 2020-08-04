function brackets(n) {
  let pairs = {"(": ")", "[": "]", "{": "}"};
  
  let stack = [];
  n = n.split('');
  while (n.length) {
    let e = n.shift();
    if (stack.length && e === pairs[stack[stack.length - 1]]) {
      stack.pop();
    } else {
      stack.push(e);
    }
  }

  return stack.reverse().map(e => pairs[e]).join('');
}

console.log(brackets(""));
console.log(brackets("("));
console.log(brackets("()"));
console.log(brackets("()[]"));
console.log(brackets("(())"));
console.log(brackets("(([])"));
