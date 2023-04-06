class ArrayList {
  constructor() {
    this.array = [];
  }

  Insert(item) {
    this.array.push(item);
  }

  ToString() {
    return this.array.join();
  }

  BubbleSort() {
    for (var i = 0; i < this.array.length; i++) {
      for (var j = 0; j < this.array[i].length; i++) {
        if (this.array[j] > this.array[j + 1]) {
          this.swap(this.array, j, j + 1);
        }
      }
    }
  }

  SelectionSort() {
    var indexMin;
    for (var i = 0; i < this.array.length; i++) {
      indexMin = i;
      for (var j = i; j < this.array.length; j++) {
        if (this.array[indexMin] > this.array[j]) {
          indexMin = j;
        }
      }
      if (i !== indexMin) {
        this.Swap(this.array, i, indexMin);
       }
    }
  }

  insertionSort(){
    var j , temp
    for(var i = 0; i < this.array.length; i++){
        j = i
        temp = this.array[i]
        while(j > 0 && this.array[j -1] > temp){
            this.array[j] = this.array[ j -1 ]
            j--
        }
        this.array[j] = temp
    }
  }



  Swap(array, index1, index2) {
    var aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
  }
}

var al = new ArrayList();
al.Insert(5);
al.Insert(4);
al.Insert(3);
al.Insert(2);
al.Insert(1);
al.SelectionSort();
console.log(al.ToString());
