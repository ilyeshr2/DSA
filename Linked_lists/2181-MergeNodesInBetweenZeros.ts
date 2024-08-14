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

function mergeNodes(head: ListNode | null): ListNode | null {
    let dummy =head
    let curr=head
    let sum=0
    while(curr && curr.next){
        curr=curr.next 
        if(curr.val!=0){
            sum+=curr.val
        }else{
            dummy.val=sum
            dummy.next=curr.next
            dummy=dummy.next
            sum=0
        }
    }
    return head
};