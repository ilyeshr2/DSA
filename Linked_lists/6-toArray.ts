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

  toArray(): number[] {
    this.current = this.head;
    const arr: number[] = [];

    while (this.current != undefined) {
        arr.push(this.current.value);
        this.current = this.current.next;
    }

    return arr;
  }
}