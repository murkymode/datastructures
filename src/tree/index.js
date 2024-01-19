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
    let found = false;
    const search = function (target) {
      if (this.value === target) {
        found = true;
      }
      for (let node of this.children) {
        search.call(node, target);
      }
    };
    search.call(this, target);
    return found;
  }
}

module.exports = { Tree };
