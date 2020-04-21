import { GenericTreeNode } from './genericTree'; 
describe('Generic Tree', () => {
    let tree: GenericTreeNode;
    let levelOneChild1: GenericTreeNode;
    let levelOneChild2: GenericTreeNode;
    let levelTwoNode1Child1: GenericTreeNode;
    let levelTwoNode1Child2: GenericTreeNode;
    let levelTwoNode2Child1: GenericTreeNode;
    let levelTwoNode2Child2: GenericTreeNode;
    beforeAll(() =>{
        tree = new GenericTreeNode(1);
        levelOneChild1 = tree.addNode(11);
        levelOneChild2 = tree.addNode(12);
        levelTwoNode1Child1 = levelOneChild1.addNode(22);
        levelTwoNode1Child2 = levelOneChild1.addNode(23);
        levelTwoNode2Child1 = levelOneChild2.addNode(24);
        levelTwoNode2Child2 = levelOneChild2.addNode(25);
    });
    describe('Depth First Search', ()=>{
        it('can find a node in the trees leaves', () => {
            const result = tree.depthFirstSearch((node: GenericTreeNode) => {
                return node.value === 25;
            });
            expect(result?.value).toEqual(25);
        });
        it('can find a node in the middle of the tree', () => {
            const result = tree.depthFirstSearch((node: GenericTreeNode) => {
                return node.value === 11;
            });
            expect(result?.value).toEqual(11);
        });
        it('can find a node at the top of the tree', () => {
            const result = tree.depthFirstSearch((node: GenericTreeNode) => {
                return node.value === 1;
            });
            expect(result?.value).toEqual(1);
        });

        it('will return undefined when node is not found', () => {
            const result = tree.depthFirstSearch((node: GenericTreeNode) => {
                return node.value === 66;
            });
            expect(result).toBeUndefined();
        });
    });

    describe('Breadth First Search', ()=>{
        
        it('can find a node in the trees leaves', () => {
            const result = tree.breadthFirstSearch((node: GenericTreeNode) => {
                return node.value === 25;
            });
            expect(result?.value).toEqual(25);
        });
        it('can find a node in the middle of the tree', () => {
            const breadthFirstSearchSpy = jest.spyOn(levelTwoNode1Child1, 'breadthFirstSearch');
            const result = tree.breadthFirstSearch((node: GenericTreeNode) => {
                return node.value === 11;
            });
            expect(result?.value).toEqual(11);
            expect(breadthFirstSearchSpy).toBeCalledTimes(0); // it should not invoke lower children when it finds a match
        });
        it('can find a node at the top of the tree', () => {
            const result = tree.breadthFirstSearch((node: GenericTreeNode) => {
                return node.value === 1;
            });
            expect(result?.value).toEqual(1);
        });

        it('will return undefined when node is not found', () => {
            const result = tree.breadthFirstSearch((node: GenericTreeNode) => {
                return node.value === 66;
            });
            expect(result).toBeUndefined();
        });
    });
});
