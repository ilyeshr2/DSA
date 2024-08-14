/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {

    let dummy =new ListNode()
    let curr=dummy
    let carry =0
    let val = 0
    while(l1 || l2 || carry){
         val=(l1?.val ? l1.val : 0)+(l2?.val ? l2.val : 0)+carry
         carry=Math.floor(val/10)
         curr.next=new ListNode(Math.floor(val%10))
         curr=curr.next
         l1=l1?.next ? l1.next : null
         l2=l2?.next ? l2.next : null
    }
    return dummy.next
};