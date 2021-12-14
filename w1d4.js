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

  // console log (print) the data of every node in the current list
  read() {
    var current = this.head; // set current as the head, if it exists or not
    while (current) { // if current, log and move to current.next
      console.log(current.data);
      current = current.next;
    }
  }

  // find: return true / false if current list contains a data equal to value
  contains(value) {
    // start at the head
    var runner = this.head;
    // while we have a runner
    while (runner) {
      // return true if data === value
      if (runner.data === value) {
        return true;
      }
      // otherwise advance the runner
      runner = runner.next;
    }
    // if the while loop completes, return false
    return false;
  }

  // Remove from front: remove and return the first node in the SLL
  removeFromFront() {
    if (this.isEmpty()) return null; // nothing to remove

    var removed = this.head; // save the head in a temp variable
    this.head = this.head.next; // move the head
    removed.next = null; // make removed no longer reference the list
    return removed;
  }

  // return true or false if this.head is null
  isEmpty() {
    return this.head == null;
  }

  // add given node to the head, if it exists. return void
  addToFront(node) {
    node.next = this.head; // set the new node's next to the head
    this.head = node; // move the head to the new node
    this.length++;
  }

  // myList.addToFront(new Node(22));

  // when a pointer is to the LEFT of an equal sign, we are CHANGING it
  // when a pointer is to the RIGHT of an equal sign, we are READING it

  // create a new node with given data, add it to the head. return void
  addDataToFront(data) { // 10
    var newNode = new Node(data); // create a new node with the data
    newNode.next = this.head; // set the new node's next to the head
    this.head = newNode; // move the head to the new node
    this.length++;
  }

  // if data is contained within the current list, delete it.
  // return void
  // assume there are no duplicates
  // consider the edge case if you have to delete the head node
  // consider the edge case your list is empty
  // consider the edge case that your list does not contain the data
  delete(data) {
    var runner = this.head;
    // while we have a runner
    if (runner.data === data) {
      this.removeFromFront()
    } else {
      while (runner.next) {
        // return true if data === value
        if (runner.next.data === data && runner.next.next === null) {
          runner.next = null;
          return;
        } else if (runner.next.data === data) {
          runner.next = runner.next.next
        }
        runner = runner.next;
      }
    }
    // if the while loop completes, return null
    return;
  }

  // return the size of the current linked list
  // NINJA BONUS: how might you do this without linearly traversing the list? O(1)
  size() {
    var count = 0;
    var runner = this.head;
    while (runner) {
      count++
      runner = runner.next;
    }
    console.log(count)
  }
}

// Don't forget to instantiate the SLL!
// and add a few nodes first!

// (head) -> (33) -> (22) -> null
//            ^
//          runner