class LinkNodeSingle {
    next?: LinkNode;
    value: any;
  
    constructor(value: any, next?: LinkNode) {
      this.next = next;
      this.value = value;
    }
  }