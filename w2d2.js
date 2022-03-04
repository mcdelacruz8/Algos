class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Queue
// FIFO (First in, first out)

// - enqueue
// - dequeue
// - peek
// - isEmpty
// - count

class Queue {
  constructor() {
    this.front = null; // sometimes called head "front of the line"
    this.back = null; // sometimes called rear or tail "back of the line"
  }

  // add nodes to the back of the queue
  enqueue(node) {
    // check to see if rear node exists in queue
    if (this.back == null) {
      // if it doesn't reassign the rear and front to equal new node
      this.back = node;
      this.front = node;
      //otherwise if a node DOES exist in queue
    } else {
      // who's last in line?
      this.back.next = node
      // now who's the last person in line
      this.back = node
    }
  }

  // remove from the front
  dequeue() {
    // check if front node exists in queue
    if (this.front == null) {
      // if a node DOESN't exist, do nothing
      return
      // otherwise if there is only one node, reset to null
    } else if (this.front == this.back) {
      // dereference
      var temp = this.front;
      this.front = null;
      this.back = null;
      return temp;
      // otherwise if there are multiple nodes in queue
    } else {
      // create temp variable to equal the front node
      var temp = this.front
      // set current front node to equal the next node
      this.front = this.front.next
      // set the next node to equal null
      temp.next = null
      return temp;
    }
  }

  // check the front of the queue
  peek() {
    return this.front ? this.front.data : this.front;

    //   if (this.front) {
    //     return this.front.data
    // } else {
    //     return this.front
    // }
  }

  // return true / false if queue is empty
  isEmpty() {
    if (this.front == null) {
      console.log("true")
      return true;
    } else {
      console.log("false")
      return false;
    }
  }

  // return length
  count() { }
}


// NINJA BONUS:
// print every value in the queue
// you may only use one queue or stack for additional storage
// return the queue back to it's original order when you are done
// you are not allowed to linearly traverse the queue
// only use public methods enqueue(), dequeue(), peek(), isEmpty(), and count()
function readQueue(queue) { }


var myQueue = new Queue();
var queue1 = new Node(1);
var queue2 = new Node(2);
var queue3 = new Node(3);
var queue4 = new Node(4);
var queue5 = new Node(5);

myQueue.enqueue(queue1);
myQueue.enqueue(queue2);
myQueue.enqueue(queue3);
// myQueue.enqueue(queue4);
// myQueue.enqueue(queue5);

// myQueue.dequeue();
// myQueue.dequeue();

// myQueue.peek();

// myQueue.isEmpty();

// myQueue.count();

console.log(myQueue);