import { HashTable, HashTableEntry } from '../../types/types';
export class BasicHashTable implements HashTable {
    private storage: HashTableEntry[][] = [];
    constructor(){}
    get(key: string) {
        const hash = this.generateHash(key);
        const bin = this.storage[hash];
        for (let index = 0; index < bin.length; index++) {
            const element = bin[index];
            if(element.key === key){
                return element.value;
            }
        }
    }

    remove(key: string){
        const hash = this.generateHash(key);
        const bin = this.storage[hash];
        for (let index = 0; index < bin.length; index++) {
            const element = bin[index];
            if(element.key === key){
                bin.splice(index);
            }
        }
    }

    add(key: string, value: any){
        const hash = this.generateHash(key);
        const bin = this.storage[hash];
        if(!bin){
            this.storage[hash] = [{key, value}];
            return;
        }
        for (let index = 0; index < bin.length; index++) {
            const element = bin[index];
            if(element.key === key) {
                bin[index] = {key, value};
                return;
            }
        }
        bin.push({key, value});
    }

    generateHash(key: string){ // Java's string hash code method https://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            let chr   = key.charCodeAt(i);
            hash  = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    }
}