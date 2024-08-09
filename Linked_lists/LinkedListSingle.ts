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