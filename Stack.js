class Node {  // for creating new node
    constructor(value) {
        this.value = value
        this.next = null
    }
}

// in a stack we add nodes one by one and it is LIFO operation based.
class Stack {
    constructor(value) {
        const newNode = new Node(value)
        this.top = newNode
        this.length = 1
    }

    push(value) {    // this is analogus to unshift in Linked List if we add the node from the top of stack
        const newNode = new Node(value)
        if (this.length === 0) {
            this.top = newNode
        } else {
            newNode.next = this.top
            this.top = newNode
        }
        this.length++
        return this
    }

    pop() {   // abalogus to shift in Linked List
        if (this.length === 0) return undefined

        let temp = this.top
        this.top = this.top.next
        temp.next = null

        this.length--
        return temp
    }

}

let myStack = new Stack(7)
myStack.push(23)
myStack.push(3)
myStack.push(11)