function getIntersectionNode(a: ListNode | null, b: ListNode | null): ListNode | null {
    let lengthA = 0;
    let lengthB = 0;
    let currA = a;
    let currB = b;

    // Calculate the length of list a
    while (currA) {
        lengthA++;
        currA = currA.next;
    }

    // Calculate the length of list b
    while (currB) {
        lengthB++;
        currB = currB.next;
    }

    // Reset pointers to the start of the lists
    currA = a;
    currB = b;

    // Find the length difference
    let diff = Math.abs(lengthA - lengthB);

    // Move the pointer of the longer list `diff` steps ahead
    if (lengthA > lengthB) {
        while (diff > 0) {
            currA = currA!.next;
            diff--;
        }
    } else {
        while (diff > 0) {
            currB = currB!.next;
            diff--;
        }
    }

    // Traverse both lists simultaneously and find the intersection
    while (currA && currB) {
        if (currA === currB) {
            return currA;
        }
        currA = currA.next;
        currB = currB.next;
    }

    // If no intersection is found
    return null;
}
