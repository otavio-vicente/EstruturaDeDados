// 1. Vetores
let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function buscarNoVetor(numero) {
    console.log(`Buscando número ${numero}:`, vetor.includes(numero));
}
function removerDoVetor(posicao) {
    vetor.splice(posicao, 1);
    console.log(`Vetor após remoção:`, vetor);
}
// Testes
buscarNoVetor(5);
removerDoVetor(2);

// buscarNoVetor(numero): Verifica se um número está presente no vetor e imprime true ou false.
// removerDoVetor(posicao): Remove o elemento na posição especificada e imprime o vetor atualizado.

console.log('------------------------------------------------------');


// 2. Lista Simplesmente Encadeada
class Node {
    constructor(value) {
        this.value = value; // Valor do nó
        this.next = null;   // Próximo nó (inicialmente null)
    }
}

class LinkedList {
    constructor() {
        this.head = null; // Início da lista (inicialmente vazia)
    }

    // Insere no início
    insertAtBeginning(value) {
        const newNode = new Node(value);
        newNode.next = this.head; // Novo nó aponta para o head atual
        this.head = newNode;      // Novo nó se torna o head
    }

    // Insere no final
    insertAtEnd(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode; // Se a lista estiver vazia, o novo nó é o head
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next; // Percorre até o último nó
        }
        current.next = newNode; // Último nó aponta para o novo nó
    }

    // Remove de uma posição específica
    removeAt(position) {
        if (!this.head) return; // Lista vazia, nada para remover

        if (position === 0) {
            this.head = this.head.next; // Remove o head
            return;
        }

        let current = this.head;
        for (let i = 0; i < position - 1; i++) {
            if (!current.next) return; // Posição inválida
            current = current.next;    // Percorre até o nó anterior à posição
        }
        current.next = current.next.next; // Remove o nó na posição
    }

    // Busca um valor na lista
    search(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) return true; // Valor encontrado
            current = current.next;
        }
        return false; // Valor não encontrado
    }

    // Imprime a lista
    printList() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

// Exemplo de uso
const list = new LinkedList();
list.insertAtEnd(10); // 10
list.insertAtEnd(20); // 10 -> 20
list.insertAtBeginning(5); // 5 -> 10 -> 20
list.printList(); // 5, 10, 20
console.log(list.search(10)); // true
list.removeAt(1); // Remove 10
list.printList(); // 5, 20
console.log('------------------------------------------------------');

// 3. Lista Duplamente Encadeada
class DoublyNode {
    constructor(value) {
        this.value = value; // Valor do nó
        this.next = null;   // Próximo nó
        this.prev = null;   // Nó anterior
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null; // Início da lista
        this.tail = null; // Fim da lista
    }

    // Insere no início
    insertAtBeginning(value) {
        const newNode = new DoublyNode(value);
        if (!this.head) {
            this.head = this.tail = newNode; // Lista vazia, head e tail são o novo nó
        } else {
            newNode.next = this.head; // Novo nó aponta para o head atual
            this.head.prev = newNode; // Head atual aponta para o novo nó
            this.head = newNode;     // Novo nó se torna o head
        }
    }

    // Remove do final
    removeFromEnd() {
        if (!this.tail) return; // Lista vazia, nada para remover

        if (this.head === this.tail) {
            this.head = this.tail = null; // Lista com um único nó
        } else {
            this.tail = this.tail.prev; // Tail passa a ser o nó anterior
            this.tail.next = null;    // Novo tail não tem próximo
        }
    }

    // Imprime a lista (do início ao fim e do fim ao início)
    printList() {
        console.log("Do início ao fim:");
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }

        console.log("Do fim ao início:");
        current = this.tail;
        while (current) {
            console.log(current.value);
            current = current.prev;
        }
    }
}

// Exemplo de uso
const doublyList = new DoublyLinkedList();
doublyList.insertAtBeginning(10); // 10
doublyList.insertAtBeginning(20); // 20 -> 10
doublyList.insertAtBeginning(30); // 30 -> 20 -> 10
doublyList.printList(); // Imprime em ambas as direções
doublyList.removeFromEnd(); // Remove 10
doublyList.printList(); // 30 -> 20
console.log('------------------------------------------------------');

// 4. Pilha
let pilha = [];
class Stack {
    constructor(maxSize = 10) {
        this.items = []; // Array para armazenar os elementos da pilha
        this.maxSize = maxSize; // Tamanho máximo da pilha
    }

    // Verifica se a pilha está vazia
    isEmpty() {
        return this.items.length === 0;
    }

    // Verifica se a pilha está cheia
    isFull() {
        return this.items.length === this.maxSize;
    }

    // Adiciona um elemento no topo da pilha
    push(value) {
        if (this.isFull()) {
            console.log("Pilha cheia!");
            return;
        }
        this.items.push(value); // Adiciona o valor no final do array
    }

    // Remove e retorna o elemento do topo da pilha
    pop() {
        if (this.isEmpty()) {
            console.log("Pilha vazia!");
            return;
        }
        return this.items.pop(); // Remove o último elemento do array
    }

    // Retorna o elemento do topo da pilha sem removê-lo
    peek() {
        if (this.isEmpty()) {
            console.log("Pilha vazia!");
            return;
        }
        return this.items[this.items.length - 1]; // Retorna o último elemento
    }

    // Verifica se os parênteses de uma expressão estão balanceados
    static isBalanced(expression) {
        const stack = new Stack();
        for (let char of expression) {
            if (char === "(") {
                stack.push(char); // Empilha parênteses de abertura
            } else if (char === ")") {
                if (stack.isEmpty()) {
                    return false; // Parênteses de fechamento sem abertura
                }
                stack.pop(); // Desempilha parênteses de abertura
            }
        }
        return stack.isEmpty(); // Verifica se todos os parênteses foram fechados
    }
}

// Exemplo de uso
const stack = new Stack(5);
stack.push(10); // Pilha: [10]
stack.push(20); // Pilha: [10, 20]
console.log(stack.peek()); // 20
stack.pop(); // Pilha: [10]
console.log(stack.isEmpty()); // false
console.log(Stack.isBalanced("((1+2) * (3/4))")); // true
console.log(Stack.isBalanced("((1+2) * (3/4)")); // false
console.log('------------------------------------------------------');

// 5. Fila
class Queue {
    constructor() {
        this.items = []; // Array para armazenar os elementos da fila
    }

    // Adiciona um elemento no final da fila
    enqueue(value) {
        this.items.push(value); // Adiciona o valor no final do array
    }

    // Remove e retorna o elemento do início da fila
    dequeue() {
        if (this.isEmpty()) {
            console.log("Fila vazia!");
            return;
        }
        return this.items.shift(); // Remove o primeiro elemento do array
    }

    // Verifica se a fila está vazia
    isEmpty() {
        return this.items.length === 0;
    }

    // Retorna o elemento do início da fila sem removê-lo
    peek() {
        if (this.isEmpty()) {
            console.log("Fila vazia!");
            return;
        }
        return this.items[0]; // Retorna o primeiro elemento
    }
}

// Exemplo de uso
const queue = new Queue();
queue.enqueue(10); // Fila: [10]
queue.enqueue(20); // Fila: [10, 20]
console.log(queue.peek()); // 10
queue.dequeue(); // Fila: [20]
console.log(queue.isEmpty()); // false

class CircularQueue {
    constructor(maxSize = 5) {
        this.items = new Array(maxSize); // Array de tamanho fixo
        this.maxSize = maxSize; // Tamanho máximo da fila
        this.front = -1; // Índice do início da fila
        this.rear = -1;  // Índice do final da fila
    }

    // Verifica se a fila está vazia
    isEmpty() {
        return this.front === -1 && this.rear === -1;
    }

    // Verifica se a fila está cheia
    isFull() {
        return (this.rear + 1) % this.maxSize === this.front;
    }

    // Adiciona um elemento no final da fila
    enqueue(value) {
        if (this.isFull()) {
            console.log("Fila cheia!");
            return;
        }
        if (this.isEmpty()) {
            this.front = this.rear = 0; // Primeiro elemento
        } else {
            this.rear = (this.rear + 1) % this.maxSize; // Avança o rear circularmente
        }
        this.items[this.rear] = value; // Adiciona o valor
    }

    // Remove e retorna o elemento do início da fila
    dequeue() {
        if (this.isEmpty()) {
            console.log("Fila vazia!");
            return;
        }
        const value = this.items[this.front]; // Valor a ser removido
        if (this.front === this.rear) {
            this.front = this.rear = -1; // Fila fica vazia
        } else {
            this.front = (this.front + 1) % this.maxSize; // Avança o front circularmente
        }
        return value;
    }

    // Retorna o elemento do início da fila sem removê-lo
    peek() {
        if (this.isEmpty()) {
            console.log("Fila vazia!");
            return;
        }
        return this.items[this.front]; // Retorna o primeiro elemento
    }
}

// Exemplo de uso
const circularQueue = new CircularQueue(3);
circularQueue.enqueue(10); // Fila: [10]
circularQueue.enqueue(20); // Fila: [10, 20]
circularQueue.enqueue(30); // Fila: [10, 20, 30]
console.log(circularQueue.isFull()); // true
console.log(circularQueue.dequeue()); // 10 (Fila: [20, 30])
circularQueue.enqueue(40); // Fila: [20, 30, 40]
console.log(circularQueue.peek()); // 20

// Banco

class BankQueue {
    constructor() {
        this.queue = new Queue(); // Usa a fila implementada anteriormente
    }

    // Adiciona um cliente à fila
    addClient(client) {
        this.queue.enqueue(client);
        console.log(`${client} entrou na fila.`);
    }

    // Atende o próximo cliente
    serveNextClient() {
        const client = this.queue.dequeue();
        if (client) {
            console.log(`${client} foi atendido.`);
        } else {
            console.log("Não há clientes na fila.");
        }
    }

    // Mostra a fila atual
    showQueue() {
        if (this.queue.isEmpty()) {
            console.log("A fila está vazia.");
        } else {
            console.log("Fila atual:", this.queue.items.join(" -> "));
        }
    }
}

// Exemplo de uso
const bank = new BankQueue();
bank.addClient("Cliente 1"); // Cliente 1 entrou na fila.
bank.addClient("Cliente 2"); // Cliente 2 entrou na fila.
bank.showQueue(); // Fila atual: Cliente 1 -> Cliente 2
bank.serveNextClient(); // Cliente 1 foi atendido.
bank.showQueue(); // Fila atual: Cliente 2