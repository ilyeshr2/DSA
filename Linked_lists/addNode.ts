class LinkedNode {
  next?: LinkedNode;
  value: any;

  constructor(value: any, next?: LinkedNode) {
      this.value = value;
      this.next = next;
  }
}

class LinkedList {
  head?: LinkedNode;
  tail?: LinkedNode;
  previous?: LinkedNode;
  current?: LinkedNode;
  next?: LinkedNode;
  length: number = 0;

  constructor() {
      this.head = undefined;
      this.tail = undefined;
      this.previous = undefined;
      this.current = undefined;
      this.next = undefined;
  }

  addNode(value: any) {
    const node = new LinkedNode(value);
  
    if (this.head === undefined) {  // If the list is empty
        this.head = node;
        this.tail = node;  // Tail is the same as head when there's only one node
    } else {
        this.tail!.next = node;  // Attach the new node to the end of the list
        this.tail = node;  // Update the tail to be the new node
    }
  
    this.length++;
  }
}


