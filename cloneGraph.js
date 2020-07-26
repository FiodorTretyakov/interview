function clone(n) {
  let result = {
    "value": n.value,
    "children": []
  }
  
  let q = [n];
  let visited = {};
  visited[n.value] = result;
  while(q.length) {
    let e = q.shift();
    for (let i = 0; i < e.children; i++) {
      visited[e.value].children.push({
        "value": e.children[i].value
      });
      if(visited[e.children[i].value]) {
        continue;
      }
      visited[e.children[i].value] = {
            "value": e.children[i].value,
            "children": []
      };
      q.push(e.children[i]);
    }
  }
  
  return result;
}

let g = {
