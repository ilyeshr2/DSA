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
}