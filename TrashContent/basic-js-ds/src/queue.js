const {NotImplementedError} = require('../extensions/index.js')
const {ListNode} = require('../extensions')

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.stor = null
    this.size = 0
  }

  getUnderlyingList() {
    return this.stor
  }

  enqueue(value) {
    let nodes = new ListNode(value)
    let lastNodes

    if (this.stor === null) {
      this.stor = nodes
    } else {
      lastNodes = this.stor

      while (lastNodes.next) {
        lastNodes = lastNodes.next
      }
      lastNodes.next = nodes
    }
    this.size++
  }

  dequeue() {
    let delElement = this.stor.value
    if (this.stor.next) {
      this.stor = this.stor.next
    } else {
      this.stor = null
    }
    return delElement
  }
}

module.exports = {
  Queue,
}
