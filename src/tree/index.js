const { Node } = require('./node');

class Tree {
  constructor(root) {
    this.root = root;
    this.children = [];
  }

  addChild(value) {
    const childNode = new Node(value);
    this.children.push(childNode);
  }

  contains(target) {
    let containsTarget = false;
    const search = function (target) {
      if (this.value === target) {
        containsTarget = true;
      }
      for (let node of this.children) {
        search.call(node, target);
      }
    };
    search.call(this, target);
    return containsTarget;
  }
}

module.exports = { Tree };
