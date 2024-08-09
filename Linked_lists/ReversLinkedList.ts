class LinkNode {
    next?: LinkNode;
    value: any;
  
    constructor(value: any, next?: LinkNode) {
      this.next = next;
      this.value = value;
    }
  }
  
  class LinkedList {
    head?: LinkNode;
    length: number = 0;
  
    constructor(head?: LinkNode) {
      this.head = head;
    }
  
    addNode(value: any) {
      this.length++;
      let newNode = new LinkNode(value);
      newNode.next = this.head;
      this.head = newNode;
    }
  
    printList() {
      let current = this.head;
      while (current != undefined) {
        console.log(current.value);
        current = current.next;
      }
    }
  }
  
  function ListToArr(list: LinkedList): number[] {
    let current: LinkNode | undefined = list.head;
    let arr: number[] = [];
    
    while (current != undefined) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }
  
  function reverseLinkedList(list: LinkedList): LinkedList {
    let current = list.head;
    let myReversedList: LinkedList = new LinkedList();
  
    while (current != undefined) {
      myReversedList.addNode(current.value);
      current = current.next;
    }
    
    return myReversedList;
  }
  
  let myList = new LinkedList();
  myList.addNode(1);
  myList.addNode(2);
  myList.addNode(3);
  myList.addNode(4);
  
  console.log(ListToArr(myList)); // Output: [4, 3, 2, 1]
  
  let reversedList = reverseLinkedList(myList);
  console.log(ListToArr(reversedList)); // Output: [1, 2, 3, 4]
  