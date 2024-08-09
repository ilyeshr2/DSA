class LinkedNode {
    next?: LinkedNode;
    value: any;

    constructor(value: any, next?: LinkedNode) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    head?: LinkedNode;
    tail?: LinkedNode;
    previous?: LinkedNode;
    current?: LinkedNode;
    next?: LinkedNode;
    length: number = 0;

    constructor() {
        this.head = undefined;
        this.tail = undefined;
        this.previous = undefined;
        this.current = undefined;
        this.next = undefined;
    }

    delNode(value: any) {
        this.current = this.head;
        this.previous = undefined;

        while (this.current != undefined) {
            if (this.current.value === value) {
                if (this.previous === undefined) {  // Deleting the head node
                    this.head = this.current.next;
                    if (this.head === undefined) {  // List became empty
                        this.tail = undefined;
                    }
                } else {
                    this.previous.next = this.current.next;
                    if (this.current.next === undefined) {  // Deleting the last node
                        this.tail = this.previous;  // Update the tail
                    }
                }

                this.length--;
                return;
            }
            this.previous = this.current;
            this.current = this.current.next;
        }
    }
}