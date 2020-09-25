// first in last out like a bucket

class Stack {
    constructor() {
        this.data = []
    }

    push(entry) {
        this.data.push(entry)
    }
    pop() {
        return this.data.pop();
    }
    peek() {
        return this.data[this.data.length - 1];
    }
}

const stack1 = new Stack();
stack1.push(1)
stack1.push(4)
stack1.pop()
stack1.push(3)
stack1.peek()