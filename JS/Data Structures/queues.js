// queue is a line first in first out

class Queues {
    constructor() {
        this.data = [];
    }

    unshift(entry) {
        this.data.unshift(entry);
    }

    pop() {
        return this.entry.pop();
    }
    peek() {
        return this.data[this.data.length - 1];
    }
}

const queue1 = new Queues();
queue1.unshift(1)
queue1.unshift(2)
queue1.unshift(3)
queue1.pop()
queue1.peek()

