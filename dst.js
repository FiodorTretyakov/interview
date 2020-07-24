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
    
    if (v.children && v.children.length) {
      for (let i = 0; i < v.children.length; i++) {
        let e = v.children[i];
        e.path = v.path.concat([v.value]);
        stack.push(e);
      }
    }
    
    if (v.end && (!minPath || v.path.reduce((e, s) => e + s, 0) + 1 < minPath.reduce((e, s) => e + s, 0))) {
      minPath = v.path.concat([v.value]);
    }
  }
  
  return minPath;
}

let root = {
 "value" : 1,
 "children": [{"value": 2, "children": [{"value": 3}]}, {"value": 3, "end": true, "children": [{"value": 4}]}]
};
console.log(dst(root))
