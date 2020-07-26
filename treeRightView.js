function rightView(n) {
  let result = [];
  let q = [{"node": n, "level": 0}];
  
  while (q.length) {
    let e = q.shift();
    if (result.length > e.level) {
      result[e.level] = e.node.value;
    } else {
      result.push(e.node.value);
    }
    if (e.node.left) {
      q.push({"node": e.node.left, "level": e.level + 1});
    }
    if (e.node.right) {
      q.push({"node": e.node.right, "level": e.level + 1});
    }
  }
             
  return result;
}

console.log(rightView({"value": 1, "left": {"value": 2, "left": {"value": 3}, "right": {"value": 4}}, "right": {"value": 5, "left": {"value": 6}, "right": {"value": 7}}}));
