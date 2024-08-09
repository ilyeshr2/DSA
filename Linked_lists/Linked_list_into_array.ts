class LinkNode {
    next?: LinkNode;
    value: any;
  
    constructor(value: any, next?: LinkNode) {
      this.next = next;
      this.value = value;
    }
  }
  
  
  
  class LinkedList{
    head?: LinkNode
    lenght:number = 0
  
    constructor(head?:LinkNode){
      this.head=head
    }
  
    addNode(value:any){
      this.lenght++
      let newNode= new LinkNode(value)
      newNode.next=this.head
      this.head=newNode
    }
  
    printList(){
      let current=this.head
      while(current!=undefined){
        console.log(current)
        current=current.next
      }
    }
  
    
  }
  
  let myList=new LinkedList()
  
  myList.addNode(1)
  myList.addNode(2)
  myList.addNode(3)
  myList.addNode(4)
  
  let current:any=myList.head
  console.log(current.value)
  let arr:number[]=[]
  
  while(current!=undefined){
    arr.push(current.value)
    current=current.next
  }
  
  console.log(arr)
  
  