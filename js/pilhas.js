class Pilha {
    constructor() {
        this.items = [];
    }

     push(element) {
        for(const id of element){
            this.items.push(id);
        }
    }
    
     pop() {
        return this.items.pop();
    }

     peek() {
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

const pilha  = new Pilha
pilha.push([1, 2, 3]);
pilha.print()
