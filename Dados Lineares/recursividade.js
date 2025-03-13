console.log("===============================================");

console.time("Meu Algoritmo");

function calculaFatorial(num) {
    
    if (num == 1) {
        console.log("Quantidade de operações/tempo do algoritmo: " + cont);
    return 1
    } else {
    cont++;    
    return num * calculaFatorial(num - 1)      
    }
}

let cont=0;
console.log("Cálculo: " + calculaFatorial(4));

console.timeEnd("Meu Algoritmo");

console.log("----------------------------------------------");

console.time("Meu Algoritmo");

function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // Saída: 8

console.timeEnd("Meu Algoritmo");

console.log("------------------------------------------");

console.time("Meu Algoritmo");

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Percurso In-Order (Esquerda -> Raiz -> Direita)
function inOrderTraversal(root) {
    if (root !== null) {
        inOrderTraversal(root.left);
        console.log(root.value);
        inOrderTraversal(root.right);
    }
}

// Percurso Pre-Order (Raiz -> Esquerda -> Direita)
function preOrderTraversal(root) {
    if (root !== null) {
        console.log(root.value);
        preOrderTraversal(root.left);
        preOrderTraversal(root.right);
    }
}

// Percurso Post-Order (Esquerda -> Direita -> Raiz)
function postOrderTraversal(root) {
    if (root !== null) {
        postOrderTraversal(root.left);
        postOrderTraversal(root.right);
        console.log(root.value);
    }
}


// Criando a árvore de exemplo
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("Percurso In-Order:");
inOrderTraversal(root);

console.log("\nPercurso Pre-Order:");
preOrderTraversal(root);

console.log("\nPercurso Post-Order:");
postOrderTraversal(root);

console.timeEnd("Meu Algoritmo");

console.log("------------------------------");

console.time("Meu Algoritmo");

class ListNode {
    constructor(valor, proximo = null) {
        this.valor = valor;
        this.proximo = proximo;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    adicionar(valor) {
        this.head = new ListNode(valor, this.head); // Insere no início da lista
    }

    soma() {
        let atual = this.head;
        let total = 0;
        while (atual) {
            total += atual.valor;
            atual = atual.proximo;
        }
        return total;
    }
}

// Exemplo de uso
const lista = new LinkedList();
lista.adicionar(10);
lista.adicionar(20);
lista.adicionar(30);

console.log("Soma dos valores:", lista.soma()); // Saída: Soma dos valores: 60

console.timeEnd("Meu Algoritmo");

console.log("----------------------------------");

console.time("Meu Algoritmo");
class TreeNode  {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
            return;
        }
        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }
    searchRecursive(node, value) {
        
        if (node === null) {
            return false; // Valor não encontrado
        }
        if (node.value === value) {
            return true; // Valor encontrado
        }
        if (value < node.value) {
            return this.searchRecursive(node.left, value);
        } else {
            return this.searchRecursive(node.right, value);
        }
    }

    search(value) {
        return this.searchRecursive(this.root, value);
    }
}

let cont2=0
// Exemplo de uso:
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log(bst.search(7));  // true
console.log(bst.search(12)); // false

console.timeEnd("Meu Algoritmo");

