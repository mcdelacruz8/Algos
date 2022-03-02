/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let count = 0;
  let runner = head;
  while (runner) {
    count++;
    runner = runner.next;
  }
  //Number of times to traverse through 
  count = Math.floor(count / 2);
  runner = head;
  // count is still 2
  while (count != 0) {
    count--;
    runner = runner.next;
  }
  return runner;
};