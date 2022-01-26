// For creating a node
class Node {
     constructor(value){
         this.value = value
         this.next = null
     }
 }

 // best case is omega and worst case is theta
 
 class LinkedList {
     constructor(value) {
         const newNode = new Node(value)
         this.head = newNode
         this.tail = this.head
         this.length = 1  // for keeping track of the length of LinkedList (LL)
     }
 
     push(value) {
         const newNode = new Node(value)
         if (!this.head) {  // case for LL with no nodes
             this.head = newNode
             this.tail = newNode
         } else {
             this.tail.next = newNode
             this.tail = newNode
         }
         this.length++
         return this
     }
     pop() {
        if(!this.head) return undefined  // checks if the LL has no nodes and then returns undefined
        let temp = this.head  // variable for manipulation
        let pre = this.head   // variable for manipulation
        while(temp.next) {   // if temp.next is not null or has next non empty node i.e greater than 1 node
            pre = temp
            temp = temp.next
        }
        this.tail = pre
        this.tail.next = null
        this.length--
        if(this.length === 0) {   // this condition checks if the LL has only one node and it is poped out we assign null to both head and tail
            this.head = null
            this.tail = null
        }
        return temp   // returns the poped node.
    }
    unshift(value) {   // adds new node at the start of LL
        const newNode = new Node(value)
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
    shift() {   // removes a node at the start of LL
        if(!this.head) return undefined
        let temp = this.head
        this.head = this.head.next
        this.length--
        if(this.length === 0) {
            this.tail = null
        }
        temp.next = null
        return temp
    }
    get(index) {   // get the node at that index
        if(index < 0 || index >= this.length) return undefined
        let temp = this.head
        for(let i = 0; i < index; i++) {
            temp = temp.next
        }
        return temp
    }
    set(index, value) { // change the value at that index of LL
        let temp = this.get(index)
        if(temp) {
            temp.value = value
            return true
        }
        return false
    }
    insert(index, value) {   // insert a new node at that index of LL
        if(index < 0 || index > this.length) return false
        if(index === this.length) return this.push(value)
        if(index === 0) return this.unshift(value)
        
        const newNode = new Node(value)
        const temp = this.get(index - 1)
        newNode.next = temp.next
        temp.next = newNode
        this.length++
        return true
    }
    remove(index) {   // removes node at that index of LL
        if(index < 0 || index >= this.length) return undefined
        if(index === 0) return this.shift()
        if(index === this.length - 1) return this.pop()

        const before = this.get(index - 1)
        const temp = before.next

        before.next = temp.next
        temp.next = null
        this.length--
        return temp
    }
    reverse() {  // reverses the LL
        let temp = this.head
        this.head = this.tail
        this.tail = temp
        let next = temp.next
        let prev = null
        for(let i = 0; i < this.length; i++) {
            next = temp.next
            temp.next = prev
            prev = temp
            temp = next
        }
        return this
    }
 }
 
 let myLinkedList = new LinkedList(11)
 myLinkedList.push(3)
 myLinkedList.push(23)
 myLinkedList.push(7)
 