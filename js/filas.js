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

// class PriorityQueue {
//   constructor(element, priority) {
//     this.items = [];
//     this.element = element;
//     this.priority = priority;
//   }

//   enqueue(element, priority) {
//     var queueElement = { element, priority };
//     var added = false;

//     for (var i = 0; i < this.items.length; i++) {
//       if (queueElement.priority < this.items[i].priority) {
//         this.items.splice(i, 0, queueElement);
//         added = true;
//         break;
//       }
//     }

//     if (!added) {
//       this.items.push(queueElement);
//     }
//   }

//   dequeue() {
//     return items.shift();
//   }

//   print() {
//     for (var i = 0; i < this.items.length; i++) {
//       console.log(this.items[i].element + " " + this.items[i].priority);
//     }
//   }
// }

// var pqueue = new PriorityQueue();
// pqueue.enqueue("Pedro", 2);
// pqueue.enqueue("Filipe", 1);
// pqueue.enqueue("Coelho", 1);
// pqueue.print();


function hotPotato(namelist, num){
  // console.log(num)
  var queue = new Queue();

  for(var i=0; i < namelist.length; i++){
    queue.enqueue(namelist[i])    
  }

  var eliminated = ''

  while(queue.size() > 1){
    for(var i = 0; i < num; i++){
      queue.enqueue(queue.dequeue())
      // queue.print()
    }
    eliminated = queue.dequeue()
    console.log(eliminated +  " was eliminated from the hot Potato game!")
  }

  return queue.dequeue()
}

var names = ["Pedro", "Natan", "Regison", "Xand", "Pirulito"]
var winner = hotPotato(names, Math.floor((Math.random() * 11)))
console.log("The winner is: " + winner) 