function MyArray() {
  this.length = 0;
}
function MyArrayProto() {
  this.push = function (elem) {
    this[this.length] = elem;
    this.length++;
    return this.length;
  }
  this.pop = function () {
    if (this.length > 0) {
      const lastElem = this[this.length - 1];
      delete this[--this.length];
      return lastElem
    }
    return undefined;
  }
  this.shift = function () {
    if (this.length === 0) {
      return undefined;
    }  
    const firstElem = this[0];
    delete this[0]; 
    for (let i = 0; i < this.length - 1; i++) {
      this[i] = this[i + 1];
    } 
    delete this[this.length - 1];
    this.length--;
    return firstElem;
  }
  this.unshift = function(elem){ 
    for (let i = this.length - 1; i >= 0; i--) {
      this[i + 1] = this[i];
    }
    this[0] = elem;
    this.length++;
    return this.length;
  }
  this.filter = function(value){
    const newArr = new MyArray();
    for(let i = 0 ; i < this.length ; i++){
      if(this[i] === value){
         newArr.push(this[i]);
      }
    }
    return newArr;
  }
  this.findIndex = function(elem) {
    let itemIndex = undefined;
    for (let i = 0; i < this.length; i++) {
      if (elem === this[i]) {
        itemIndex = i;
      }
    }
    return itemIndex;
  };
  this.forEach = function(func) {
    for (let i = 0; i < this.length; i++) {
      func(this[i], i, this);
    }
  };
  this.map = function(func){
    const newArr = new MyArray();
    for (let i = 0; i < this.length; i++) {
      newArr = func(this[i], i, this);
    }
    return newArr;
  }
  this.isArray = function(elem) {
    return elem instanceof MyArray;
  }
}

