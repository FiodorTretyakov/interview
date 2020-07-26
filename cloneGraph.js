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
    if (!e.children) continue;
    for (let i = 0; i < e.children.length; i++) {
      if(!visited[e.children[i].value]) {
        visited[e.children[i].value] = {
              "value": e.children[i].value,
              "children": []
        };
      } else {
        q.push(e.children[i]);
      }
      visited[e.value].children.push(e.children[i]);
    }
  }
  
  return result;
}

let g = {
 "value" : 1,
 "children": [{"value": 2, "children": [{"value": 5}]}, {"value": 3, "end": true, "children": [{"value": 4}]}]
};
console.log(clone(g));
