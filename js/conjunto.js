class Set {
  constructor() {
    this.items = {};
  }

  add(value) {
    if (!this.has(value)) {
      this.items[value] = value;
      return true;
    }
    return false;
  }

  delete(value) {
    if (this.has(value)) {
      delete this.items[value];
      return true;
    }
    return false;
  }

  has(value) {
    return this.items.hasOwnProperty(value);
  }

  clear() {
    this.items = {};
  }

  size() {
    return Object.keys(this.items).length;
  }

  values() {
    var values = [],
      keys = Object.keys(this.items);

    for (var i = 0; i < keys.length; i++) {
      values.push(this.items[keys[i]]);
    }
    return values;
  }

  union(otherset) {
    var unionSet = new Set(),
      values = this.values();

    for (var i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }

    values = otherset.values();

    for (var i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }

    return unionSet;
  }

  intersection(otherSet) {
    var intersectionSet = new Set(),
      values = this.values();
    for (var i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) {
        intersectionSet.add(values[i]);
      }
    }
    return intersectionSet;
  }

  difference(otherSet) {
    var differenceSet = new Set(),
      values = this.values();

    for (var i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) {
        differenceSet.add(values[i]);
      }
    }
    return differenceSet;
  }

  subset(otherSet){
    if(this.size() > otherSet.size()){
        return false
    }else {
        var values = this.values()

        for(var i = 0; i < values.length; i++){
            if(!otherSet.has(values[i])){
                return false
            }
        }
        return true
    }
  }
  
}