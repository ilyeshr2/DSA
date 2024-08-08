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
  
  let myList = new LinkedList();
  
  myList.addNode(1);
  myList.addNode(2);
  myList.addNode(3);
  myList.addNode(4);
  
  let current: LinkNode | undefined = myList.head;
  let target: number = 3;
  
  while (current != undefined) {
    if(current.value==target){
      console.log(true)
      break
    }
    current = current.next;
  }
  
  