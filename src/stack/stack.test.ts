import { Stack } from './stack'; 
describe('Stack', () => {
    const value1 = 1;
    const value2 = 2;
    it('should have a method push that adds data to the store', async () => {
        const stack = new Stack();
        stack.push(value1);
        expect(stack['store'].length).toEqual(1);
        expect(stack['store'][0]).toEqual(value1);

        stack.push(value2);
        expect(stack['store'].length).toEqual(2);
        expect(stack['store'][0]).toEqual(value1);
        expect(stack['store'][1]).toEqual(value2);
    });

    it('should have a method pop that removes and returns data from the store in a FILO manner', async () => {
        const stackStore = [value1, value2];
        const stack = new Stack(stackStore);
        expect(stack.pop()).toEqual(value2); //First in Last Out
        expect(stack.pop()).toEqual(value1);
        expect(stack['store'].length).toEqual(0);
    });

    it('should have a method peek that returns the next data that will be returned on a pop', async () => {
        const stackStore = [value1, value2];
        const stack = new Stack(stackStore);
        expect(stack.peek()).toEqual(value2); //First in Last Out
        expect(stack['store'].length).toEqual(2);
    });

    it('should have a method isEmpty that returns true for an empty stack and false otherwise', async () => {
        const fullStack = new Stack([value1, value2]);
        const emptyStack = new Stack();
        expect(fullStack.isEmpty()).toEqual(false); //First in Last Out
        expect(emptyStack.isEmpty()).toEqual(true);
    });

    it('should work in a FILO manner', ()=>{
        const stack = new Stack();
        stack.push(value1);
        stack.push(value2);
        expect(stack.peek()).toEqual(value2);
        expect(stack.pop()).toEqual(value2);
        expect(stack.peek()).toEqual(value1);
        expect(stack.pop()).toEqual(value1);
    });
});
