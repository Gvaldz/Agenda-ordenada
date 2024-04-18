import { Node } from "./Node.js";

function defaultEquals(a, b) {
    return a === b;
}

export class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0; 
        this.head = undefined;
        this.equalsFn = equalsFn; 
        }

    push(element) {
        const node = new Node(element);
        let current; 
        if (this.head == null) {
        this.head = node;
        } else {
        current = this.head; 
        while (current.next != null) { 
        current = current.next;
        }
        current.next = node; 
        }
        this.count++; 
        }

    getElementAt(index) {
        if (index >= 0 && index <= this.count) { 
        let node = this.head; 
        for (let i = 0; i < index && node != null; i++) {
        node = node.next;
        }
        return node; 
        }
        return undefined; 
        }

        removeAt(index) {
            if (index >= 0 && index < this.count) {
                let current = this.head;
                if (index === 0) {
                    this.head = current.next;
                } else {
                    let previous = null;
                    for (let i = 0; i < index; i++) {
                        previous = current;
                        current = current.next;
                    }
                    previous.next = current.next;
                }
                this.count--; 
                return current.contact; 
            }
            return null;
        }
        
}