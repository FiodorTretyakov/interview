function getClosest(n, k, p) {
  let result = [];
  for (let i = 0; i < n.length; i++) {
    result.push(Math.pow(n[i].x - p.x, 2) + Math.pow(n[i].y - p.y), 2);
  }

  return result.sort().slice(0, k);
}
