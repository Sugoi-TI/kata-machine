type StackNode<T> = {
    value: T;
    prev?: StackNode<T>;
};

export default class Stack<T> {
    public length: number;
    private head?: StackNode<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        const newNode = {
            value: item,
            next: undefined,
            prev: undefined,
        } as StackNode<T>;

        if (this.head) {
            newNode.prev = this.head;
        }

        this.head = newNode;
        this.length++;
    }

    pop(): T | undefined {
        if (this.head) {
            const popValue = this.head.value;
            this.head = this.head.prev;
            this.length--;

            return popValue;
        } else {
            return undefined;
        }
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
