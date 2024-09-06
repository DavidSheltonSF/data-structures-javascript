class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Queue{
  constructor(){
    this.rear = null;
    this.front = null;
    this.length = 0;
  }

  enqueue(value){
    let newNode = new Node(value);

    if (!this.front){
      this.front = newNode;
    }
    else{
      this.rear.next = newNode;
    }

    this.rear = newNode;
    
    this.length ++;
  }

  dequeue(){
    let temp = null;

    if (!this.front){
      return null;
    }

    if (this.front === this.rear){
      temp = this.front;
      this.front = this.rear = null;
      return temp;
    }

    temp = this.front;
    this.front = this.front.next;
    temp.next = null;
    return temp.value

  }

  printQueue(){
    let current = this.front;

    while(current){
      console.log(current.value);
      current = current.next;
    }
  }
}

const queue = new Queue();
queue.enqueue(7);
queue.enqueue(3);
//console.log(queue.dequeue());
//console.log(queue.dequeue());
console.log(queue.front)
console.log(queue.rear)
queue.printQueue()
