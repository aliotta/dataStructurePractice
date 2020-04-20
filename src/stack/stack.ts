import { Stack as AbstractStack } from '../../types/types';

export class Stack implements AbstractStack {
    private store: any[];
    constructor(store?: any[]) {
        this.store = store || [];
    }

    push(data: any): void {
        this.store.push(data);
    }

    pop(): any {
        return this.store.pop();
    }

    peek(): any {
        return this.store[this.store.length - 1];
    }

    isEmpty() : boolean {
        return !this.store.length;
    }
}