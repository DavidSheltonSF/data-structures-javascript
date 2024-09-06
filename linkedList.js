class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {

  constructor(){
    this.head = null;
    this.tail = null;
  }

  append(value){
    const newNode = new Node(value);

    if (this.tail) {
      //console.log(this.tail.value)
      this.tail.next = newNode;
      //console.log(newNode.value)
    }
    else {
      this.head = newNode;
    }

    // The new element will be the tail now
    this.tail = newNode;
  }
  
  add(value){
    /* Add a node at the beggining of the list */

    const newNode = new Node(value);
    
    if (!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  delete(index){
    /* Delete the nth element */

    let c = 0
    let current = this.head;

    // Check if element is the first the head of the list
    if (index === 0){
      this.head = current.next;
      current.next = null;
      return;
    }

    // Holds the wanted node antecessor
    let ant;

    // Iter through the list
    while (true){

      // Check if next node is the wanted node
      if (c+1 === index){
        ant = current
      }

      // Check if current node is the wanted node
      if (c === index){
        ant.next = current.next;
        current.next = null
        return;
      }

      c++;
      current = current.next;
    }
  }

  printItems(){
    let current = this.head;

    while(current){
      console.log(current.value);
      current = current.next;
    }
  }

  findValue(value){
    let current = this.head;

    while(current){
      if (current.value === value){
        return current;
      }
      current = current.next;
    }
    return null;
  }


  reverse(){
    // 1
    let current = this.head;
    // 1
    this.tail = current;

    // 1
    let ant = null;
    // 1
    let temp = null;

    // n+1
    while(current){
      // n
      temp = current.next;
      // n
      current.next = ant;
      // n
      ant = current;
      // n
      current = temp
    }
    // 1
    this.head = ant;
  }
  //5n+6 -> O (n)
}


let list = new LinkedList();
list.append(2);
list.append(5);
list.append(77);
//list.add(500);
//list.delete(3)

list.printItems();
list.reverse();
list.printItems();

//let value = list.findValue(500);
//console.log(value)
