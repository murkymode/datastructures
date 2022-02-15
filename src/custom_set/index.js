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

const newSet = new CustomSet();
newSet.add(1);
newSet.add(1);
newSet.add(3);
console.log(newSet.exists(1));
console.log(newSet.exists(2));
newSet.remove(3);
console.log(newSet);
