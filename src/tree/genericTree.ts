import {  TreeNode, Comperator } from '../../types/types';
export class GenericTreeNode implements TreeNode {
    top?: TreeNode;
    
    constructor(public value: any, top?: TreeNode, public children: TreeNode[] = []){
        if(!top){
            this.top = this;
        }
    }

    depthFirstSearch(comperator: Comperator): TreeNode | undefined {
        const node = this;
        if(comperator(node)){
            return node;
        } 
        const children = node.children;
        for (let index = 0; index < children.length; index++) {
            const child = children[index];
            const result = child.depthFirstSearch(comperator);
            if(result){
                return result;
            }
        }
    }

    breadthFirstSearch(comperator: Comperator): TreeNode | undefined {
        let nodes: TreeNode[] = [this];
        for (let index = 0; index < nodes.length; index++) {
            const node = nodes[index];
            if(comperator(node)){
                return node;
            }
            if(index === nodes.length - 1){
                for (let j = index; j < nodes.length; j++) {
                    const currentNode = nodes[j];
                    for (let index = 0; index < currentNode.children.length; index++) {
                        const child = currentNode.children[index];
                        nodes.push(child);
                    }
                }
            }
        }
    }

    addNode(value: any): TreeNode{
        const child = new GenericTreeNode(value, this.top);
        this.children.push(child);
        return child;
    }
}