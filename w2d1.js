/* Stacks
A stack is a LIFO data structure
LAST IN, FIRST OUT
LIFO / FILO
push - add to top
pop - remove from top
peek - check the top
isEmpty - check if the stack is empty, true/false
length - return size of stack
*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class slStack {
  constructor() {
    this.top = null; // this.head, this.end
    this.count = 0 // <-- added this for length method but cheating
  }

  // add to top
  push(newNode) {
    // check to see if top exists
    if (this.top == null) {
      // if it doesn't, reassign top to equal the new node
      this.top = newNode;
      // then increment count (for length method)
      this.count++
      // console.log(newNode.data)
      // otherwise if top DOES exist
    } else {
      // keep going through the stack
      newNode.next = this.top;
      this.top = newNode;
      this.count++
      // console.log(newNode.data)
    }
  }

  // remove from top
  pop() {
    // checks to see if top exists
    if (this.top == null) {
      // if it does do nothing
      return
      // otherwise if it DOESN'T exist
    } else {
      // create temp variable to equal top
      var temp = this.top;
      // set current top to equal the next node
      this.top = this.top.next;
      // decrement count (for length method)
      this.count--
      // set next node to equal null
      temp.next = null;
      return temp;
    }
  }


  // aka check top
  peek() {
    // console.log(this.top.data)
    // returns value of node on top
    return this.top.data
  }

  // check if empty
  isEmpty() {
    // checks to see if top exists
    if (this.top == null) {
      console.log("true")
      // if it does return true
      return true
      // otherwise
    } else {
      console.log("false")
      // if it doesn't return false
      return false
    }
  }

  // "1" == 1 true
  // "1" === 1 false

  // length getter
  getLength() {
    console.log("this stack's length is ", this.count)
    return this.count
  }
}


// don't forget to instantiate the slStack!
// add a few nodes first
var myStack = new slStack();
var node1 = new Node(1)
var node2 = new Node(2)
var node3 = new Node(3)
var node4 = new Node(4)
var node5 = new Node(5)

myStack.isEmpty()
myStack.push(node1)
myStack.push(node2)
myStack.push(node3)
myStack.push(node4)
myStack.push(node5)
myStack.pop()
myStack.peek()
myStack.isEmpty()
myStack.getLength();