function dst(root) {
  if (!root) throw new "NullPointerException";
  
  let visited = {};
  let minPath;
  root.path = [];
  let stack = [root];
  while (stack.length) {
    let v = stack.pop();
    
    if (visited[v.value]) {
      continue;
    }
    
    for (let i = 0; i < v.children.length; i++) {
      let e = v.children[i];
      e.path = v.path.concat([v.value]);
      stack.push(e);
    }
    
    if (!v.children.length && (!minPath || v.path.length + 1 < minPath.length)) {
      minPath = v.path.concat([v.value]);
    }
  }
  
  return minPath;
}
