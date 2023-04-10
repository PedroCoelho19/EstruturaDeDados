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

  InsertionSort(){
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

  MegrSort(){
    this.array = this.MergeSortRec(this.array)
  }

  MergeSortRec(array){
    var length = array.length
    if(length == 1) {
      return array
    }
    var mid = Math.floor(length / 2),
    left = array.slice(0 , mid),
    right = array.slice(mid, length)

    return this.Merge(this.MergeSortRec(left) , this.MergeSortRec(right))
  }

  Merge(left, right) {
    var result = [],
    il = 0,
    ir = 0

    while(il < left.length && ir < right.length){
      if(left[il] < right[ir]){
        result.push(left[il++])
      }else{
        result.push(right[ir++])
      }
    }

    while(il < left.length){
      result.push(left[il++])
    }

    while(ir < right.length){
      result.push(right[ir++])
    }

    return result
  }

  QuickSort(){
    this.Quick(this.array , 0 , this.array.length - 1)
  }

  Quick(array, left, right) {
    var index 
    if(array.length > 1){
      index = this.Partition(array, left, right)
      if(left < index - 1){
        this.Quick(array, left, index -1)
      }
      if(index < right){
        this.Quick(array, index , right)
      }
    } 
  }

  Partition(array, left, right){
    var pivot = array[Math.floor((right + left) / 2)],
    i = left ,
    j = right

    while(i <= j){
      while(array[i] < pivot){
        i++
      }
      while(array[j] > pivot){
        j--
      }

      if( i <= j){
        this.Swap(array, i , j)
        i++
        j--
      }
    }

 
    return i
  }

  Swap(array, index1, index2) {
    var aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
  }
}

var al = new ArrayList();
al.Insert(3);
al.Insert(4);
al.Insert(1);
al.Insert(6);
al.Insert(7);
al.Insert(5);
al.Insert(2);
al.QuickSort();
console.log(al.ToString());
