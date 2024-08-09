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

    addNode(value: any) {
        const node = new LinkedNode(value);

        if (this.head === undefined) {  // If the list is empty
            this.head = node;
            this.tail = node;  // Tail is the same as head when there's only one node
        } else {
            this.tail!.next = node;  // Attach the new node to the end of the list
            this.tail = node;  // Update the tail to be the new node
        }

        this.length++;
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

    indexOf(value: any): number | undefined {
        let i = 0;
        this.current = this.head;

        while (this.current != undefined) {
            if (this.current.value === value) {
                return i;
            }
            this.current = this.current.next;
            i++;
        }

        return undefined;
    }

    toArray(): number[] {
        this.current = this.head;
        const arr: number[] = [];

        while (this.current != undefined) {
            arr.push(this.current.value);
            this.current = this.current.next;
        }

        return arr;
    }

    reversList() {
        this.current = this.head;
        this.tail = this.head;  // The original head will become the tail after reversal
        this.previous = undefined;

        while (this.current != undefined) {
            this.next = this.current.next;  // Store the next node
            this.current.next = this.previous;  // Reverse the link
            this.previous = this.current;  // Move `previous` to current node
            this.current = this.next;  // Move to the next node
        }

        this.head = this.previous;  // Update head to the last node processed
    }
}

let myList = new LinkedList();
myList.addNode(1);
myList.addNode(2);
myList.addNode(3);
myList.addNode(4);

console.log(myList.toArray(), myList.head?.value, myList.tail?.value);

myList.reversList();
console.log(myList.toArray(), myList.head?.value, myList.tail?.value);
