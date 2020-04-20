import { SinglyLinkedListNode } from './singlyLinkedList'; 
describe('Singly Linked List', () => {
    it('should have a method addToTail that adds a list element to the list at the end', async () => {
        const linkedListHead = new SinglyLinkedListNode(1);
        linkedListHead.appendToTail(2);
        linkedListHead.appendToTail(3);
        expect(linkedListHead.value).toEqual(1);
        expect(linkedListHead.next?.value).toEqual(2);
        expect(linkedListHead.next?.next?.value).toEqual(3);
    });

    it('should have a method deleteNode that removes an element from  the list that matches the value provided', async () => {
        const linkedListHead = new SinglyLinkedListNode(1);
        linkedListHead.appendToTail(2);
        linkedListHead.appendToTail(3);
        linkedListHead.deleteNode(linkedListHead, 2);
        expect(linkedListHead.value).toEqual(1);
        expect(linkedListHead.next?.value).toEqual(3);

        const linkedListHead2 = new SinglyLinkedListNode(1);
        linkedListHead2.appendToTail(2);
        linkedListHead2.appendToTail(3);
        linkedListHead2.deleteNode(linkedListHead2, 3);
        expect(linkedListHead2.value).toEqual(1);
        expect(linkedListHead2.next?.value).toEqual(2);
    });

    it('should not remove the head element when using deleteNode', async () => {
        const linkedListHead = new SinglyLinkedListNode(1);
        linkedListHead.appendToTail(2);
        linkedListHead.appendToTail(3);
        linkedListHead.deleteNode(linkedListHead, 1);
        expect(linkedListHead.value).toEqual(1);
        expect(linkedListHead.next?.value).toEqual(2);
        expect(linkedListHead.next?.next?.value).toEqual(3);
    });
});
