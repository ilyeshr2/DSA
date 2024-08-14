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

function hasCycle(head: ListNode | null): boolean {
    let torus =head
    let gnina =head
    while(torus && torus.next){
        torus=torus.next.next 
        gnina = gnina.next
        if(torus===gnina){
            return true
        }
    }
    return false 
};