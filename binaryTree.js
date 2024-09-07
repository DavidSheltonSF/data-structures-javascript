class Node{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
//
class BinaryTree{
  constructor(){
    this.root = null;
  }

  insertRecursive(root, value){
    const newNode = new Node(value);

    // Base case (root is null)
    if (!root){
      root = newNode;
      return root;
    }

    if (value <= root.value){
      root.left = this.insertRecursive(root.left, value);
    }
    else if (value > root.value) {
      root.right = this.insertRecursive(root.right, value);
    }

    return root;
  }


  insert(value){
    this.root = this.insertRecursive(this.root, value);
  }

  printTreeRecursive(root){
    // The base case is when root is null
    // then the code will stop
    if(root){
      this.printTreeRecursive(root.left);
      console.log(root.value)
      this.printTreeRecursive(root.right);
    }
  } 

  printTree(){
    this.printTreeRecursive(this.root);
  }

  findRecursive(root, value){
    if(root.value === value){
      return root;
    }

    if(value <= root.value){
      return this.findRecursive(root.left, value);
    }
    else if(value > root.value){
      return this.findRecursive(root.right, value);
    }

    return null;
  }

  find(value){
    return this.findRecursive(this.root, value);
  }

  // Find the node more to the right
  findGreater(root){
    if (!root.right){
      return root
    }
    return this.findGreater(root.right);
  }

  deleteRecursive(root, value){
    /*
      Se o nó que será deletado possuir filhos, então
      ele será substituído pelo nó que estiver mais a direita (maior nó) da
      árvore do filho esquerdo do nó que será deletado.
    */

    if(!root){
      return null;
    }

    // The value is less than or greather than the root?
    if(value < root.value){
      root.left = this.deleteRecursive(root.left, value);
    }
    else if (value > root.value){
      root.right = this.deleteRecursive(root.right, value)
    }

    // If the value is equal to the root value
    else {

      // Check if root have no children
      let temp = null;
      if(!root.left){
        temp = root.right;
        root = null;
        return temp;
      }
      else if (!root.right){
        temp = root.left;
        root = null
        return temp;
      }
      

      temp = this.findGreater(root.left);
      root.value = temp.value;
      root.left = this.deleteRecursive(root.left, temp.value);

    }
    return root
  }

  delete(value){
    return this.deleteRecursive(this.root, value);
  }
}

const binaryTree = new BinaryTree();
binaryTree.insert(22);
binaryTree.insert(4);
binaryTree.insert(5);
binaryTree.insert(1);
binaryTree.insert(2);
binaryTree.insert(3);
binaryTree.insert(31);
binaryTree.insert(29);
binaryTree.insert(28);
binaryTree.insert(32);


binaryTree.delete(29);
binaryTree.printTree()
//console.log(binaryTree.find(29))