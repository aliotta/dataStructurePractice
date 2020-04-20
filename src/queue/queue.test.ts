import { Queue } from './queue'; 
describe('Queue', () => {
    const value1 = 1;
    const value2 = 2;
    it('should have a method push that adds data to the store', async () => {
        const queue = new Queue();
        queue.add(value1);
        expect(queue['store'].length).toEqual(1);
        expect(queue['store'][0]).toEqual(value1);

        queue.add(value2);
        expect(queue['store'].length).toEqual(2);
        expect(queue['store'][0]).toEqual(value1);
        expect(queue['store'][1]).toEqual(value2);
    });

    it('should have a method pop that removes and returns data from the store in a FILO manner', async () => {
        const queueStore = [value1, value2];
        const queue = new Queue(queueStore);
        expect(queue.remove()).toEqual(value1); //First in First Out
        expect(queue.remove()).toEqual(value2);
        expect(queue['store'].length).toEqual(0);
    });

    it('should have a method peek that returns the next data that will be returned on a pop', async () => {
        const queueStore = [value1, value2];
        const queue = new Queue(queueStore);
        expect(queue.peek()).toEqual(value1); //First in First Out
        expect(queue['store'].length).toEqual(2);
    });

    it('should have a method isEmpty that returns true for an empty queue and false otherwise', async () => {
        const fullQueue = new Queue([value1, value2]);
        const emptyQueue = new Queue();
        expect(fullQueue.isEmpty()).toEqual(false); 
        expect(emptyQueue.isEmpty()).toEqual(true);
    });

    it('should work in a FIFO manner', ()=>{
        const queue = new Queue();
        queue.add(value1);
        queue.add(value2);
        expect(queue.peek()).toEqual(value1);
        expect(queue.remove()).toEqual(value1);
        expect(queue.peek()).toEqual(value2);
        expect(queue.remove()).toEqual(value2);
    });
});
