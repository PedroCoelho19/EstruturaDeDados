class Dictionary {
  constructor() {
    this.items = {};
  }

  set(key, value) {
    this.items[key] = value;
  }

  delete(key) {
    if (this.has(key)) {
      delete this.items[key];
      return true;
    }
    return false;
  }

  has(key) {
    return this.items.hasOwnProperty(key);
  }

  get(key) {
    return this.has(key) ? this.items[key] : undefined;
  }

  clear() {
    items = {};
  }

  size() {
    return Object.keys(this.items).length;
  }

  keys() {
    return Object.keys(this.items);
  }

  values() {
    var values = [],
      keys = Object.keys(this.items);

    for (var i = 0; i < keys.length; i++) {
      values.push(this.items[keys[i]]);
    }

    return values;
  }

  getitems() {
    return this.items;
  }
}

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    // console.log(element, "shalow")
    // for(const id of element){
    return this.items.push(element);
    // }
  }
  dequeue() {
    return this.items.shift();
  }

  front() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items);
  }
}

class Graph {
  constructor() {
    (this.vertices = []), (this.adjlist = new Dictionary());
  }
  addVertex(v) {
    this.vertices.push(v);
    this.adjlist.set(v, []);
  }

  addEdge(v, w) {
    this.adjlist.get(v).push(w);
    this.adjlist.get(w).push(v);
  }

  toString() {
    var s = "";
    for (var i = 0; i < this.vertices.length; i++) {
      s += this.vertices[i] + " -> ";
      var neighbors = this.adjlist.get(this.vertices[i]);
      for (var j = 0; j < neighbors.length; j++) {
        s += neighbors[j] + " ";
      }
      s += "\n";
    }
    return s;
  }

  initializeColor() {
    var color = [];
    for (var i = 0; i < this.vertices.length; i++) {
      color[this.vertices[i]] = "white";
    }
    return color;
  }

  bfs(v , callback) {
    var color = this.initializeColor(),
      queue = new Queue();
    queue.enqueue(v);

    while (!queue.isEmpty()) {
      var u = queue.dequeue(),
      neighbors = this.adjlist.get(u)
      color[u] = "grey";
      for (var i = 0; i < neighbors.length; i++) {
        var w = neighbors[i];
        if (color[w] == "white") {
          color[w] = "grey";
          queue.enqueue(w);
        }
      }
      color[u] = "black";
      callback(u);
    }
  }
}

function printNode(value) {
  console.log("Visited vertex: " + value);
}

var graph = new Graph();
var myVertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
for (var i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");

// console.log(graph.toString());

graph.bfs(myVertices[0], printNode)     