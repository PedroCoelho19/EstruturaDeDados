class Queue {
    constructor() {
        this.items = [];
    }

     enqueue(element) {
        // for(const id of element){
            return this.items.push(element);
        // }
    }
     dequeue() {
        return this.items.pop();
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

var fila = new Queue();

fila.enqueue('Carlos')
fila.enqueue('Ana')
fila.enqueue('Lucas')

fila.print();

fila.dequeue()
fila.print()

fila.dequeue()
fila.print()
console.log(fila.isEmpty())