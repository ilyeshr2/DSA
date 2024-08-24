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

function getDecimalValue(head: ListNode | null): number {
    let curr=head
    let dec=0
    let length=0
    while(curr){
        length++
        curr=curr.next
    }
    curr=head
    length--
    while(curr){
        dec=dec+(curr.val*(Math.pow(2,length)))
        length--
        curr=curr.next
    }
    return dec
};

