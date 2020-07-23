function traverseInOrder (node) {
  if (node == null) {
    return [];
  }
  return traverseInOrder(node.left).concat([node.value]).concat(traverseInOrder(node.right));
}

function traverseWithoutRec (node) {
  if (node == null) {
    return [];
  }

  let stack = [node];
  let tail = [];
  let result = [];

  while (stack.length) {
    let e = stack.pop();

    if (e.right) {
      stack.push(e.right);
    }

    if (e.left) {
      stack.push(e.left);
      tail.unshift(e.value);
    } else {
      result.push(e.value);
      result = result.concat(tail);
      tail = [];
    }
  }

  return result;
}

let tree = {
  "value": 5,
  "left": {"value": 3},
  "right": {"value": 2}
}
console.log(traverseInOrder(tree));
console.log(traverseWithoutRec(tree));
