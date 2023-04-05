class ValuePair {
    constructor(key , value) {
        this.key = key
        this.value = value
    }

    toString() {
        return `{ ${this.key} : ${this.value} }`;
    }
}

class LinkedList {
    constructor(element) {
      this.element = element  
      this.next = null
      this.prev = null
      this.length = 0;
      this.head = null;
      this.tail = null
    }

    
    append(element) {
     var node = new LinkedList(element),
        current;
  
      if (!this.head) {
        this.head = node;
      } else {
        current = this.head;
  
        while (current.next) {
          current = current.next;
        }
        current.next = node;
      }
      this.length++;
    }
  
    insert(position, element) {
      if( position >= 0 && position <= this.length){
          var node = { element: element, next: null },
          current = this.head,
          previous,
          index = 0
  
          if(position == 0){
              node.next = current
              this.head = node
          }else{
              while(index++ < position){
                  previous = current
                  current = current.next
              }
              node.next = current
              previous.next = node
          }
          this.length++
          return true
      }else{
          return false
      }
    }
  
    removeAt(position) {
      if (position > -1 && position < this.length) {
        var current = this.head,
          previous,
          index = 0;
  
        if (position === 0) {
          this.head = current.next;
        } else {
          while (index++ < position) {
            previous = current;
            current = current.next;
          }
          previous.next = current.next;
        }
        this.length--;
        return current.element;
      } else {
        return null;
      }
    }
  
    remove(element) {
      var index =  this.indexOf(element); 
      return this.removeAt(index)
    }
  
    indexOf(element) {
      var current =  this.head,
      index = 0
  
      while(current){
        if(element === current.element){
          return index;
        }
        index++
        current = current.next
      }
      return -1
    }
  
    isEmpty(element) {
      return this.length == 0
    }
  
    size() {
      return this.length
    }
  
    getHead(){
      return this.head
    }
  
    toString() {
      var current = this.head,
        string = "";
  
      while (current) {
        string += current.element + " ";
        current = current.next;
      }
      return string;
    }
  
    print() {
      console.log(this.toString());
    }
    
  }
  

class Dictionary{
    constructor(){
        this.items = {}
    }

    set(key , value){
        this.items[key] = value
    }

    delete(key){
        if(this.has(key)){
            delete this.items[key]
            return true
        }
        return false
    }

    has(key){
        return this.items.hasOwnProperty(key)
    }

    get(key){
        return this.has(key) ? this.items[key] : undefined 
    }

    clear(){
        items = {}
    }

    size(){
        return Object.keys(this.items).length
    }

    keys(){
        return Object.keys(this.items)
    }

    values(){
        var values = [],
        keys = Object.keys(this.items)

        for (var i = 0; i < keys.length; i++){
            values.push(this.items[keys[i]]) 
        }

        return values
    }

    getitems(){
        return this.items 
    }
}

class HashTable{
    constructor(){
        this.table = []
    }


     put(key, value ){
        var position = this.losoloseHashCode(key)
        if(this.table[position] == undefined){
            this.table[position] = new LinkedList()
        }
        this.table[position].append(new ValuePair(key , value))
    }

    // put(key, value ){
    //     var position = this.losoloseHashCode(key)
    //     // console.log(position + " " + key )
    //     this.table[position] = value
    // }

    remove(key){
        var position = this.losoloseHashCode(key)
        if(this.table[position] !== undefined){
            var current = this.table[position].getHead()

            while(current.next){
                if(current.element.key == key){
                    this.table[position].remove(current.element)
                    if(this.table[position].isEmpty()){
                        this.table[position] = undefined
                    } 
                    return true
                }
                current = current.next
            }
            if(current.element.key == key){
                this.table[position].remove(current.element)
                if(this.table[position].isEmpty()){
                    this.table[position] = undefined
                }
                return true
            }
        }
        return false
    }


    // remove(key){
    //     this.table[this.losoloseHashCode(key)] = undefined
    // }

    get(key){
        var position = this.losoloseHashCode(key)
        if(this.table[position] != undefined){
            var current = this.table[position].getHead()

            while(current.next){
                if(current.element.key == key){
                    return current.element.value
                }
                current = current.next
            }
            if(current.element.key == key){
                return current.element.value
            }
        }
        return undefined
    }

    // get(key){
    //     return this.table[this.losoloseHashCode(key)];
    // }

    losoloseHashCode(key){
        var hash = 0

        for(var i = 0; i < key.length; i++){
            hash += key.charCodeAt(i)
        }
        return hash % 37
    }

    size(){
        return this.table.length
    }

    print(){
        for(var i = 0; i < this.table.length; i++){
            if(this.table[i] != undefined){
                console.log(i + ' : ' + this.table[i])
            }
        }
    }
}

var hash =  new HashTable()

hash.put("Gandalf", "gandalf@gamil.com")
hash.put("John", "jhon@gamil.com")
hash.put("Tyrion", "tyrion@gamil.com")
hash.put("Aaron", "aaron@gamil.com")
hash.put("Donnie", "donnie@gamil.com")
hash.put("Ana", "ana@gamil.com")
hash.put("Jonathan", "jonathan@gamil.com")
hash.put("Jamie", "jamie@gamil.com")
hash.put("Sue", "sue@gamil.com")
hash.put("Mindy", "mindy@gamil.com")
hash.put("Paul", "paul@gamil.com")
hash.put("Nathan", "nathan@gamil.com")

hash.print()

console.log(hash.get('Marcos'))
console.log(hash.get('Paul'))


console.log(hash.remove('Marcos'))
console.log(hash.remove('Jonathan'))
console.log(hash.remove('Paul'))

hash.print()

// console.log(hash.size())

// hash.remove("Filipe")

// console.log(hash.get("Filipe"))