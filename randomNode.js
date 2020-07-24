function fetchRandomNode(headNode) {
  let counter = 0;
  let pointer = headNode;
  while (pointer.next) {
    pointer = pointer.next;
    counter++;
  }
	
  let r = Math.floor(Math.random() * (counter + 1));
  counter = 0;
  while (counter != r) {
 		headNode = headNode.next;
  }
  
  return headNode;
}


