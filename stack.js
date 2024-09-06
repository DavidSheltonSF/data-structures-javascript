class Node{
  constructor(value){
    this.value = value;
    this.previous = null;
  }
}

class Stack{
  constructor(){
    this.top = null;
    this.length = 0
  }

  push(value){
    const newNode = new Node(value);

    newNode.previous = this.top;
    this.top = newNode;
    this.length++;
  }

  pop(){

    if(!this.top){
      return null
    }

    const temp = this.top; 
    this.top = this.top.previous; 
    temp.previous = null; // Remove reference to previous node
    
    this.length--;

    return temp.value
  }

  printStack(){
    let current = this.top;

    while(current){
      console.log(current.value);
      current = current.previous;
    }
  }
}

function validate (expression){

  // Stacks to store the separators
  const parentheses = new Stack(); // 1
  const brackets = new Stack(); // 1
  const braces = new Stack(); // 1

  // Object of keys to stacks
  // 1
  const stacks = {
    '(': parentheses,
    ')': parentheses,
    '[': brackets,
    ']': brackets,
    '{': braces,
    '}': braces
  }

  // List of separators open/close
  const openSep = ['(', '[', '{']; //1
  const closeSep = [')', ']', '}']; //1
  
  //n+1 (n is the number of caracters and +1 is the fail case of the loop)
  for (i=0; i<expression.length; i++){
    // Check if the caracter is an open separator
    // n
    if (openSep.includes(expression[i])){
      // Push the separator to its respective stack
      //m (number of open separators in the expression)
      stacks[expression[i]].push(expression[i])
    }

    // Check if the caracter is a close separator
    // n - m (number of caracters that are not open separators)
    else if (closeSep.includes(expression[i])){
  
      // Pop the separator from its respective stack
      // x (number of close separators)
      stacks[expression[i]].pop();
    }

  }
  // Check if some separator was not closed
  //1
  if (
    parentheses.length + 
    brackets.length + 
    braces.length
  ){
    //1
    return false;
  }
  else {
    return true;
  }
  // 2n + m (n - m) + x + 9
  // 2 * 13 + 1 + (13 - 1) + 1 + 9
  // 26 + 1 + 12 + 10
  // 49

  //3n + x + 9
  //3 * 13 + 10
  //39 + 10
  //
}
const stack = new Stack();
stack.push(5);
stack.push(52);
stack.push(21);
console.log(stack.pop())
stack.printStack()

// Valid exemples
console.log(validate('(23 * 22) == x'));
//console.log(validate('21 * 32 + {81 / [38 + 6] - (8 *  2)}'));

// Invalid exemples
console.log(validate('((1 + 1)'));
console.log(validate('21 + {81 / [1 + 5] - (77 *  2}'));