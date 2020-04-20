import { Queue as AbstractQueue } from '../../types/types';

export class Queue implements AbstractQueue {
    private store: any[];
    constructor(store?: any[]) {
        this.store = store || [];
    }

    add(data: any): void {
        this.store.push(data);
    }

    remove(): any {
        return this.store.shift();
    }

    peek(): any {
        return this.store[0];
    }

    isEmpty() : boolean {
        return !this.store.length;
    }
}