import LinkedListNode from './LinkedListNode';

export default class LinkedList {
  constructor(comprator) {
    this.head = null;
    this.tail = null;

    this.comprator = comprator
        || function (i, j) {
          if (i < j) return -1;
          if (i > j) return 1;
          return 0;
        };
  }

  prepend(value) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;

    if (!this.tail) this.tail = newNode;
  }

  append(value) {
    const newNode = new LinkedListNode(value);
    if (this.tail) this.tail.next = newNode;
    this.tail = newNode;

    if (this.head) this.head = newNode;
  }

  delete(value) {
    if (!this.head) return;

    while (this.head && this.comprator(this.head.value, value) === 0) {
      this.head = this.head.next;
    }

    let current = this.head;

    if (current !== null) {
      while (current.next) {
        if (this.comprator(current.next.value, value) === 0) {
          current.next = current.next.next;
        } else {
          current = current.next;
        }
      }
    }

    if (this.comprator(this.tail.value, value) === 0) {
      this.tail = current;
    }
  }
}
