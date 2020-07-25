function isComplete(node) {
  let lastLevel = -1;
  
  let q = [{"node": node, "level": 0}];
  
  while (q.length) {
    let e = q.shift();
    
    if (e.node.left) {
      q.push({"node": e.node.left, "level": e.level + 1});
    } else if (lastLevel === -1){
      lastLevel = e.level;
    } else if (lastLevel !== e.level) {
      return false;
    }
    
    if (e.node.right) {
      if (!e.node.left) {
        return false;
      }
      q.push({"node": e.node.right, "level": e.level + 1});
    } else if (lastLevel === -1) {
      lastLevel = e.level + 1;
    } else if (e.node.left && lastLevel !== e.level + 1) {
      return false;
    }
  }
  
  return true;
}


let node = {"left": {"left": {}}, "right": {"left": {}}};
console.log(isComplete(node));
