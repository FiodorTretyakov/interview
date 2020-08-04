function toList(node) {
  if (node.left) {
    let n = toList(node.left);
    while (n.next) {
      n = n.next;
    }
    n.next = node;
    node.prev = n;
  } else {
    return node;
  }
  if (node.right) {
    let n = toList(node.right);
    while (n.prev) {
      n = n.prev;
    }
    node.next = n;
    n.prev = node;
  } else {
    return node;
  }

  return node;
}
