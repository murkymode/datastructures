/*
  This is an implementation of a LRU cache.

  An LRU Cache is a data stucture which has a limit on the number of objects it stores.
  As data is adding into the cache, the most recently added or accessed item is pushed to the front.
    ie. Let's imagine we have a LRU cache limited at 3 (it can only store 3 objects):

        As we add items, the first value added remains the LRU value, unless accessed.
        Once capacity is reached, whichever value happens to be least used gets removed.

  This gives us a sliding window of tracked values where the top value is most recently used.
  Use Case:
    Recently played songs on a music app:
      The list displays your most recently played song.
      Should you select a song from the list, it moves to the most recent spot.
      The end of the list represents the LRU song.
*/

// This implentation uses a native Map data structure for ease of ordering, and time complexity.

class LRUcache {
  constructor(limit = 3) {
    this.limit = limit;
    this.map = new Map();
  }

  get(key) {
    if (this.map.has(key)) {
      const value = this.map.get(key);
      this.map.delete(key);
      this.map.set(key, value);
      return value;
    }
    return -1;
  }

  put(key, value) {
    if (this.get(key) === -1) {
      if (this.limit === this.map.size) {
        // remove the first element in the map
        for (const element of this.map) {
          this.map.delete(element[0]);
          break;
        }
      }
    }
    this.map.set(key, value);
  }
}
