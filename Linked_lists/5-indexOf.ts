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

  indexOf(value: any): number | undefined {
    let i = 0;
    this.current = this.head;

    while (this.current != undefined) {
        if (this.current.value === value) {
            return i;
        }
        this.current = this.current.next;
        i++;
    }

    return undefined;
  }
}