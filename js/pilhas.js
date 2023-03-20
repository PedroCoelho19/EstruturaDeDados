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

// const pilha  = new Pilha
// pilha.push([1, 2, 3]);
// pilha.print()


function dec2bin(decNumber){
    var restStack = [],
    rest,
    binaryString = ''

    while( decNumber > 0){
        rest = Math.floor(decNumber % 2)
        restStack.push(rest)
        decNumber = Math.floor(decNumber / 2)
    }

    while(restStack.length > 0){
        binaryString += restStack.pop().toString()
    }

    return binaryString
}

// console.log(dec2bin(5))

function baseConverter(decNumber, base){
    var restStack = [],
    rest,
    baseString = '',
    digits = "0123456789ABCDEF"
    
    while(decNumber > 0){
        rest = Math.floor(decNumber % base)
        restStack.push(rest)
        decNumber = Math.floor(decNumber / base)
    }

    while(restStack.length > 0){
        baseString += digits[restStack.pop()]
    }

    return baseString
}