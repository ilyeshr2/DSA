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

function mergeInBetween(list1: ListNode | null, a: number, b: number, list2: ListNode | null): ListNode | null {
    let curr = list1
    let i=list1
    let j=list1

    for(let i1=0; i1<a ; i1++){
        i=i.next
    }
    for(let j1=0; j1<b ; j1++){
        j=j.next
    }
    while(curr){
        if(curr.next===i){
            curr.next=list2
            break
        }
        curr=curr.next
    }
    while(list2){
        if(list2.next===null){
            list2.next=j.next
            break
        }
        list2=list2.next
    }

    return list1
};