// 1. Fatorial Recursivo
function fatorial(n) {
    if (n === 0 || n === 1) return 1; // Caso base: fatorial de 0 ou 1 é 1
    return n * fatorial(n - 1); // Chamada recursiva: n * fatorial(n-1)
}
// Complexidade de tempo: O(n) (linear)

// 2. Sequência de Fibonacci
function fibonacci(n) {
    if (n === 0) return 0; // Caso base: Fibonacci(0) = 0
    if (n === 1) return 1; // Caso base: Fibonacci(1) = 1
    return fibonacci(n - 1) + fibonacci(n - 2); // Chamada recursiva
}
// Complexidade de tempo: O(2^n) (exponencial)

// Otimização com memoization
function fibonacciMemo(n, memo = {}) {
    if (n in memo) return memo[n]; // Se já calculado, retorna do cache
    if (n === 0) return 0;
    if (n === 1) return 1;
    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo); // Armazena no cache
    return memo[n];
}
// Complexidade de tempo: O(n) (linear)

// 3. Travessia em Árvores
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Percurso in-order (esquerda -> raiz -> direita)
function inOrderTraversal(node) {
    if (node === null) return; // Caso base: nó nulo
    inOrderTraversal(node.left); // Visita a subárvore esquerda
    console.log(node.value); // Visita a raiz
    inOrderTraversal(node.right); // Visita a subárvore direita
}

// Percurso pre-order (raiz -> esquerda -> direita)
function preOrderTraversal(node) {
    if (node === null) return;
    console.log(node.value); // Visita a raiz
    preOrderTraversal(node.left); // Visita a subárvore esquerda
    preOrderTraversal(node.right); // Visita a subárvore direita
}

// Percurso post-order (esquerda -> direita -> raiz)
function postOrderTraversal(node) {
    if (node === null) return;
    postOrderTraversal(node.left); // Visita a subárvore esquerda
    postOrderTraversal(node.right); // Visita a subárvore direita
    console.log(node.value); // Visita a raiz
}

// 4. Soma dos Elementos de uma Lista Encadeada
class NodeSoma {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function somaListaRecursiva(node) {
    if (node === null) return 0; // Caso base: lista vazia
    return node.value + somaListaRecursiva(node.next); // Soma o valor atual + resto da lista
}

// 5. Busca em uma Árvore Binária de Busca
function buscaBST(node, target) {
    if (node === null) return false; // Caso base: nó nulo (valor não encontrado)
    if (node.value === target) return true; // Valor encontrado
    if (target < node.value) {
        return buscaBST(node.left, target); // Busca na subárvore esquerda
    } else {
        return buscaBST(node.right, target); // Busca na subárvore direita
    }
}
// Complexidade de tempo: O(h), onde h é a altura da árvore (O(log n) em árvores balanceadas)

// 6. Torre de Hanói
function torreDeHanoi(n, origem, destino, auxiliar) {
    if (n === 1) {
        console.log(`Mova disco 1 de ${origem} para ${destino}`); // Caso base: move o disco 1
        return;
    }
    torreDeHanoi(n - 1, origem, auxiliar, destino); // Move n-1 discos para o pino auxiliar
    console.log(`Mova disco ${n} de ${origem} para ${destino}`); // Move o disco n para o destino
    torreDeHanoi(n - 1, auxiliar, destino, origem); // Move n-1 discos do auxiliar para o destino
}
// Complexidade de tempo: O(2^n) (exponencial)

// 7. Contagem de Nós em uma Lista Encadeada
function contarNos(node) {
    if (node === null) return 0; // Caso base: lista vazia
    return 1 + contarNos(node.next); // Conta o nó atual + resto da lista
}
// Complexidade de tempo: O(n) (linear)

// ==================================================
// Exemplos de uso
console.log("Fatorial de 5:", fatorial(5)); // 120
console.log("Fibonacci(6):", fibonacci(6)); // 8
console.log("Fibonacci com memoization(6):", fibonacciMemo(6)); // 8
console.log('------------------------------------------------------');

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
console.log('------------------------------------------------------');

console.log("In-Order Traversal:");
inOrderTraversal(root); // 4, 2, 5, 1, 3

console.log("Pre-Order Traversal:");
preOrderTraversal(root); // 1, 2, 4, 5, 3

console.log("Post-Order Traversal:");
postOrderTraversal(root); // 4, 5, 2, 3, 1
console.log('------------------------------------------------------');

const lista = new Node(1);
lista.next = new Node(2);
lista.next.next = new Node(3);
console.log("Soma da lista:", somaListaRecursiva(lista)); // 6
console.log('------------------------------------------------------');

console.log("Busca na árvore BST:", buscaBST(root, 5)); // true
console.log('------------------------------------------------------');

console.log("Torre de Hanói com 3 discos:");
torreDeHanoi(3, "A", "C", "B");
console.log('------------------------------------------------------');

console.log("Contagem de nós na lista:", contarNos(lista)); // 3