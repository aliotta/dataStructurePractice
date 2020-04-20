import { BasicHashTable } from './hashTable'; 
describe('Hash Table', () => {
    it('should be able to add and retrieve an entry from the hash table', async () => {
        const value = "world";
        const hashTable = new BasicHashTable();
        hashTable.add("hello", value);
        expect(hashTable.get("hello")).toEqual(value);
    });

    it('should be able to overwrite a value already set in the hash map', async () => {
        const value1 = "world";
        const value2 = "new world";
        const hashTable = new BasicHashTable();
        hashTable.add("hello", value1);
        hashTable.add("hello", value2);
        expect(hashTable.get("hello")).toEqual(value2);
    });

    it('should be able remove a value set in the hash map', async () => {
        const value1 = "world";
        const hashTable = new BasicHashTable();
        hashTable.add("hello", value1);
        hashTable.remove("hello");
        expect(hashTable.get("hello")).toEqual(undefined);
    });

    it('should be able add and retrieve values from keys that have collided', async () => {
        const value1 = "world";
        const value2 = "new world";
        const key1 = "hello";
        const key2 = "hello 2";
        const hashIndex = 10;
        const hashTable = new BasicHashTable();
        hashTable.generateHash = jest.fn(()=>{
            return hashIndex;
        });
        hashTable.add(key1, value1);
        hashTable.add(key2, value2);
        expect(hashTable.get(key1)).toEqual(value1);
        expect(hashTable.get(key2)).toEqual(value2);
        expect(hashTable['storage'][hashIndex][0]).toStrictEqual({key: key1, value: value1});
        expect(hashTable['storage'][hashIndex][1]).toStrictEqual({key: key2, value: value2});
        expect(hashTable['storage'][hashIndex].length).toEqual(2);
        
    });

    it('should be able remove values from keys that have collided', async () => {
        const value1 = "world";
        const value2 = "new world";
        const key1 = "hello";
        const key2 = "hello 2";
        const hashIndex = 10;
        const hashTable = new BasicHashTable();
        hashTable.generateHash = jest.fn(()=>{
            return hashIndex;
        });
        hashTable.add(key1, value1);
        hashTable.add(key2, value2);
        hashTable.remove(key2);
        expect(hashTable.get(key1)).toEqual(value1);
        expect(hashTable.get(key2)).toEqual(undefined);
        expect(hashTable['storage'][hashIndex][0]).toStrictEqual({key: key1, value: value1});
        expect(hashTable['storage'][hashIndex].length).toEqual(1);
    });
});
