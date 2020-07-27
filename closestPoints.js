function getClosest(n, k, p) {
  let result = [];
  for (let i = 0; i < n.length; i++) {
    result.push({"number": i, "value": Math.pow(n[i].x - p.x, 2) + Math.pow(n[i].y - p.y), 2);
  }

  return result.sort(function (a,b) {
    return a.value - b.value;
  }).slice(0, k).map(e => n[e.number]);
}
