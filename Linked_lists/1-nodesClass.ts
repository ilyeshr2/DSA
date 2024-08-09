class LinkedNode {
    next?: LinkedNode;
    value: any;

    constructor(value: any, next?: LinkedNode) {
        this.value = value;
        this.next = next;
    }
}