class node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val){

      this.root = this.insertHelper(this.root,val)
  }

  insertHelper(node,val){

  }
    
}
