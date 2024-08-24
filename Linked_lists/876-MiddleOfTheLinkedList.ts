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

function middleNode(head: ListNode | null): ListNode | null {
    let curr=head
    let length=0
    while(curr){
        length++
        curr=curr.next
    }
    curr=head
    let mid = Math.floor(length/2)
    let i= 1
    while(i<=mid){
        curr=curr.next
        i++
    }
    return curr
};