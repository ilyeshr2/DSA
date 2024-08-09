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

  reverseList1(list: LinkedList): LinkedList {
    let current = list.head;
    let myReversedList: LinkedList = new LinkedList();
  
    while (current != undefined) {
      myReversedList.addNode(current.value);
      current = current.next;
    }
    
    return myReversedList;
  }
  reverseList2() {
    this.current = this.head;
    this.tail = this.head;  // The original head will become the tail after reversal
    this.previous = undefined;

    while (this.current != undefined) {
        this.next = this.current.next;  // Store the next node
        this.current.next = this.previous;  // Reverse the link
        this.previous = this.current;  // Move `previous` to current node
        this.current = this.next;  // Move to the next node
    }

    this.head = this.previous;  // Update head to the last node processed
  }
}
  

  

  