export declare class Stack {
    push(datum: any): void;
    pop(): any;
    isEmpty(): boolean;
    peek(): any;
}

export declare class Queue   {
    add(datum: any): void;
    remove(): any;
    isEmpty(): boolean;
    peek(): any;
}

export declare class DoublyLinkedList extends LinkedListNode {
    previous?: LinkedListNode;
}

export declare class LinkedListNode {
    head: LinkedListNode;
    value: any;
    next?: LinkedListNode;
    appendToTail(datum: any): void;
    deleteNode(node: LinkedListNode, value: any): void;
}

export declare class HashTable {
    get(key: string): any;
    add(key: string, value: any): void;
    remove(key: string): void;
}

export interface HashTableEntry {
    key: string;
    value: any;
}