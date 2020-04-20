import { LinkedListNode } from '../../types/types';
export class SinglyLinkedListNode implements LinkedListNode {
    public next?: LinkedListNode;
    public head: LinkedListNode;
    constructor(public value: any, head?: SinglyLinkedListNode){
        if(!head){
            this.head = this;
        } else {
            this.head = head;
        }
    }

    appendToTail(data: any): void {
        const node = new SinglyLinkedListNode(data, this.head);
        let n: SinglyLinkedListNode = this;
        while (n.next){
            n = n.next;
        }
        n.next = node;
    }

    deleteNode(node: SinglyLinkedListNode, value: any): void{
        let n = node;
        while (n && n.next){
            if(n.next.value === value){
                n.next = n.next.next;
                return;
            }
            n = n.next;
        }
    }
}