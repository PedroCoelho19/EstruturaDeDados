class DoublyLinkedList {
  constructor(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  append(element) {
    var node = new DoublyLinkedList(element),
      current;

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
      this.tail = node
    }
    this.length++;
  }

  insert(position, element) {
    if (position >= 0 && position <= this.length) {
      var node = new DoublyLinkedList(element),
        current = this.head,
        previous,
        index = 0;

      if (position == 0) {
        if (!this.head) {
          this.head = node;
          this.tail = node;
        } else {
          node.next = current;
          current.prev = node;
          this.head = node;
        }
      } else if (position == this.length) {
        current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
        current.prev = node;
        node.prev = previous;
      }
      this.length++;
      return true;
    } else {
      false;
    }
  }

  removeAt(position) {}

  remove(element) {
    var index = this.indexOf(element);
    return this.removeAt(index);
  }

  indexOf(element) {
    var current = this.head,
      index = 0;

    while (current) {
      if (element === current.element) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }

  isEmpty(element) {
    return this.length == 0;
  }

  size() {
    return this.length;
  }

  getHead() {
    return this.head;
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


var dll = new DoublyLinkedList()
dll.append("Pedro")
dll.append("Filipe")
dll.append("Ferreira")
dll.insert(0 , "Alba")
dll.insert(4 , "Mariana")
dll.insert(5 , "Leandro")
dll.print()