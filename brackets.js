function brackets(n) {
  let pairs = {")": "(", "]": "[", "}": "{"};
  
  let stack = [];
  while (n.length) {
    let e = n.shift();
    if (stack.length && pairs[e] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(e);
    }
  }

  return stack.reverse().map(e => pairs[e]);
}

console.log(brackets(""));
console.log(brackets("("));
console.log(brackets("()"));
console.log(brackets("()[]"));
console.log(brackets("(())"));
console.log(brackets("(([)"));
