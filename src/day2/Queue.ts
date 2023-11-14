type QNode<T> = {
    value: T;
    next?: QNode<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: QNode<T>;
    private tail?: QNode<T>;

    constructor() {
        this.head = undefined;
        this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const newNode = { value: item } as QNode<T>;

        if (!this.tail) {
            this.tail = newNode;
            this.head = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        } else {
            const dequeValue = this.head.value;
            this.head = this.head.next;
            this.length--;

            if (this.length === 0) {
                this.tail === undefined;
            }
            // free space if there is no garbage collection

            return dequeValue;
        }
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
