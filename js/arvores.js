class BinarySearchTree{
    constructor(){
        this.root = null
    }

    insert(key){
        //insere uma chave
        var newNode = new Node(key)

        if(this.root == null){
            this.root = newNode
        }else{
            this.insertNode(this.root, newNode)
        }

    }

     insertNode(node , newNode){
        // console.log(node, "nodeee" , newNode)
        if(newNode.key < node.key){
            if(node.left == null){
                node.left = newNode
            }else{
                this.insertNode(node.left, newNode)
            }
        }else{
            if(node.right == null){
                node.right = newNode
            }else{
                this.insertNode(node.right, newNode)
            }
        }
    }

    search(key){
        //busca uma chave
        return this.searchNode(this.root, key)
    }

    searchNode(node, key){
        if(node == null){
            return false
        }
        if(key < node.key){
            return this.searchNode(node.left, key)
        }else if(key > node.key){
            return this.searchNode(node.right, key)
        }else{
            return true
        }
    }

    remove(key){
        // remove chave
        this.root = this.removeNode(node, key)
    }

    removeNode(node, key){
        if(node == key){
            return null
        }
        if(key < node.key){
            node.left = this.removeNode(node.left, key)
            return node
        }else if(key > node.key){
            node.right = this.removeNode(node.right, key)
            return node
        }else{
            if(node.left == null && node.right == null){
                node = null
                return node
            }
            if(node.left == null){
                node = node.right
                return node
            }else if(node.right == null){
                node = node.left
                return node
            }
            var aux =  this.findMinNone(node.right)
            node.key = aux.key
            node.right = this.removeNode(node.right, aux.key)
            return node 
        }
    }

    min(){
        // retorna a menor chave
        return this.minNode(this.root)
    }

    minNode(node){
        if(node){
            while(node && node.left != null){
                node = node.left
            }
            return node.key
        } 
        return null
    }

    findMinNone(node){
        while(node && node.left != null){
            node = node.left
        }
        return node
    }

    max(){
        // retorna a maior chave
        return maxNode(this.root)
    }

    maxNode(node){
        if(node){
            while(node && node.right != null){
                node = node.right
            }
            return node.key
        }
        return null
    }

    inOrderTraverse(callback){
        // visita todos os nos da árvore usuando um percurso em ordem
        this.inOrderTraverseNode(this.root, callback)
    }

    inOrderTraverseNode(node, callback){
        if(node != null){
            this.inOrderTraverseNode(node.left, callback)
            callback(node.key)
            this.inOrderTraverseNode(node.right, callback)
        }
    } 

    preOrderTraverse(callback){
        // visita todos os nos da árvore usuando um percurso em ordem
        //primeiro o no , depois os filhos
        this.preOrderTraverseNode(this.root, callback)
    }

    preOrderTraverseNode(node, callback){
        if(node != null){
            callback(node.key)
            this.preOrderTraverseNode(node.left, callback)
            this.preOrderTraverseNode(node.right, callback)
        }
    }
    
    postOrderTraverse(callback){
        // visita todos os nos da árvore usuando um percurso em ordem
        // primeiro os filhos, depois o no
        this.postOrderTraverseNode(this.root, callback)
    }

    postOrderTraverseNode(node, callback){
        if(node != null){
            this.postOrderTraverseNode(node.left, callback)
            this.postOrderTraverseNode(node.right, callback)
            callback(node.key)
        }
    }

}

class Node{
    constructor(key){
        this.key = key;
        this.left = null
        this.right = null
    }
}

function printNode(value){
    console.log(value)
}

var tree =  new BinarySearchTree()
tree.insert(11)
tree.insert(7)
tree.insert(15)  
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)
tree.insert(6)

// console.log(tree.search(13))
// console.log(tree.search(16))

console.log(tree.preOrderTraverse(printNode))