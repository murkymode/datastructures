const { Node } = require('./node');

class Tree {
  constructor(root) {
    this.root = root;
    this.children = [];
  }

  addChild(value) {
    /* add node to the tree */
    const childNode = new Node(value);
    this.children.push(childNode);
  }

  contains(target) {
    /* BF traversal */
  }
}

module.exports = { Tree };
