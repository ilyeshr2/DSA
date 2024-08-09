class LinkedNode{
    next?: LinkedNode
    value: any

    constructor(value:any, next?:LinkedNode){
        this.value=value
        this.next=undefined
    }
}

class LinkedList{
    head?:LinkedNode
    tail?:LinkedNode
    previous?:LinkedNode
    current?:LinkedNode
    next?:LinkedNode
    length: number=0
    

    constructor(){
        this.head=undefined
        this.tail=this.head
    }
    addNode(value:any){
        let node= new LinkedNode(value,this.head)
        node.next=this.head
        this.head=node
        this.length++
        if (this.length<=1){
            this.tail=node
        }
    }
    delNode(value:any){
        this.current=this.head
        while(this.current!=undefined){
            this.previous=this.current
            this.current=this.current.next
            if(this.current?.value==value){
                this.previous.next=this.current?.next
            }
        }
    }
    indexOf(value:any){
        let i=0
        let check:number=0
        this.current=this.head
        while(this.current!=undefined){
            if(this.current.value==value){
                check=1
                break
            }
            this.current=this.current.next
            console.log(i)
            i++
        }
        if(check){
            return i
        }else return undefined
        
    }
    toArray(){
        this.current=this.head
        let arr:number[]=[]
        while(this.current!=undefined){
            arr.push(this.current.value)
            this.current=this.current.next
        }
        return arr
    }
    reversList(){
        this.current=this.head
        this.previous=undefined
        this.next=this.current?.next
        while(this.current!=undefined){
            this.current.next=this.previous
            this.previous=this.current
            this.current=this.next
            this.next=this.next?.next

        }
    }
}

let myList = new LinkedList()
myList.addNode(1)
myList.addNode(2)
myList.addNode(3)
myList.addNode(4)

console.log(myList.toArray())
myList.reversList()
console.log(myList.toArray())