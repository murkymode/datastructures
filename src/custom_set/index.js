class CustomSet {
  constructor() {
    this.items = {
    };
  }

  add(val) {
    const isUnique = !this.items[val];

    if (isUnique) {
      this.items[val] = val;
    }
  }

  exists(val) {
    const isUnique = !this.items[val];
    if (isUnique) {
      return false;
    }
    return true;
  }

  remove(val) {
    delete this.items[val];
  }
}

module.exports = { CustomSet };
