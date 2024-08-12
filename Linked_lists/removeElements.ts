function removeElements(head: ListNode | null, val: number): ListNode | null {
    let dummy = new ListNode(0);
    dummy.next = head;
    
    let curr = head;
    let prev = dummy;

    while (curr) {
        if (curr.val === val) {
            // Skip the current node
            prev.next = curr.next;
        } else {
            // Move prev to curr
            prev = curr;
        }
        // Move curr to the next node
        curr = curr.next;
    }
    
    return dummy.next; // Return the new head of the list
}