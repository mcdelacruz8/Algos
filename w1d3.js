class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
  }

  // return true or false if this.head is null
  isEmpty() {
    return this.head == null;
  }

  // add given node to the head, if it exists. return void
  addToFront(node) {
    node.next = this.head; // set the new node's next to the head
    this.head = node; // move the head to the new node
  }

  // when a pointer is to the LEFT of an equal sign, we are CHANGING it
  // when a pointer is to the RIGHT of an equal sign, we are READING it

  // create a new node with given data, add it to the head. return void
  addDataToFront(data) { // 10
    var newNode = new Node(data); // create a new node with the data
    newNode.next = this.head; // set the new node's next to the head
    this.head = newNode; // move the head to the new node
  }

  // ---------------------------------
  // console log (print) the data of every node in the current list
  // traversal
  read() {
    var runner = this.head
    while (runner) {
      console.log(runner.data);
      runner = runner.next; // moves runner
    }
  }


  // find: return true / false if current list contains a data equal to value
  contains(value) {
    var runner = this.head
    while (runner) {
      if (runner.data == value) {
        return true;
      }
      runner = runner.next;
    }
    return false;
  }

  // Remove from front: remove and return the first node in the SLL
  removeFromFront() {
    var runner = this.head;
    runner.next = null;
    this.head = this.head.next;
    return runner;
  }
}

// ⚠ don't forget to instantiate the Singly Linked List


var myList = new SLL();
// executing methods:
myList.addToFront(new Node(100));
myList.addToFront(new Node(200));
myList.addToFront(new Node(300));
// console.log(myList);

myList.read();
console.log(myList.contains(400));
console.log(myList.removeFromFront()); // Node { data: 300, next: null }