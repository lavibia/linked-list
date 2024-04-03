import { Node } from './Node.mjs';

export class LinkedList {
    constructor(head = null, size = 0, tail = null) {
        this.head = head;
        this.size = size;
        this.tail = tail;
    }

    append(value) {
        let newNode = new Node();
        newNode.value = value;
        this.tail = newNode;
        if (this.head == null) {
            this.head = newNode;
        }
        else {
            let temp = this.head;
            while (temp.next != null) {
                temp = temp.next;
            }
            temp.next = newNode;
        }
        this.size += 1;
    }
    prepend(value) {
        let newNode = new Node();
        newNode.value = value;
        let next = this.head;
        newNode.next = next;
        this.head = newNode;
        this.size += 1;
    }
    size() {
        return this.size;
    }
    head() {
        return this.head;
    }
    tail() {
        return this.tail;
    }
    at(index) {
        let temp = this.head;
        for (let i = 0; i < index; i++) {
            if (temp == null)
                return null;
            temp = temp.next;
        }
        return temp;
    }
}

