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


var link = new LinkedList();
link.append("Pedro");
link.append("Filipe");
link.append("Coelho");
link.print()
link.insert(1, "Mariana")
link.print();
link.insert(0, "Gadelha")
// console.log(link.getHead("Filipe"))
link.print()