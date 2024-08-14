function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let dummy= new ListNode(0, head)
    let curr =head 
    let i = 0
    while(curr){
        i++
        curr= curr.next
    }
    curr= dummy
    let dist =i-n
    for(let j=0; j<dist ; j++){
        curr=curr.next  
    }
    curr.next=curr.next?.next || null 
    return dummy.next
    }