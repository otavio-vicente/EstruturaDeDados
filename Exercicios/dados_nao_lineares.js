// ==================================================
// 1. Árvores Binárias e Árvores Binárias de Busca (BST)
// ==================================================

class TreeNodeTwo {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Função para inserir um valor na BST
function insertBST(root, value) {
    if (root === null) return new TreeNodeTwo(value); // Caso base: cria um novo nó
    if (value < root.value) {
        root.left = insertBST(root.left, value); // Insere na subárvore esquerda
    } else {
        root.right = insertBST(root.right, value); // Insere na subárvore direita
    }
    return root;
}

// Função para buscar um valor na BST
function searchBST(root, value) {
    if (root === null || root.value === value) return root; // Caso base: valor encontrado ou nó nulo
    if (value < root.value) {
        return searchBST(root.left, value); // Busca na subárvore esquerda
    } else {
        return searchBST(root.right, value); // Busca na subárvore direita
    }
}

// Função para remover um valor da BST
function removeBST(root, value) {
    if (root === null) return null; // Caso base: valor não encontrado
    if (value < root.value) {
        root.left = removeBST(root.left, value); // Remove na subárvore esquerda
    } else if (value > root.value) {
        root.right = removeBST(root.right, value); // Remove na subárvore direita
    } else {
        // Caso 1: Nó sem filhos ou com apenas um filho
        if (root.left === null) return root.right;
        if (root.right === null) return root.left;

        // Caso 2: Nó com dois filhos (encontra o sucessor in-order)
        root.value = minValue(root.right); // Substitui pelo menor valor da subárvore direita
        root.right = removeBST(root.right, root.value); // Remove o sucessor
    }
    return root;
}

// Função auxiliar para encontrar o menor valor em uma subárvore
function minValue(node) {
    let current = node;
    while (current.left !== null) {
        current = current.left;
    }
    return current.value;
}

// Percursos em Árvores Binárias
function inOrderTraversal(root) {
    if (root === null) return;
    inOrderTraversal(root.left); // Esquerda
    console.log(root.value); // Raiz
    inOrderTraversal(root.right); // Direita
}

function preOrderTraversal(root) {
    if (root === null) return;
    console.log(root.value); // Raiz
    preOrderTraversal(root.left); // Esquerda
    preOrderTraversal(root.right); // Direita
}

function postOrderTraversal(root) {
    if (root === null) return;
    postOrderTraversal(root.left); // Esquerda
    postOrderTraversal(root.right); // Direita
    console.log(root.value); // Raiz
}

// ==================================================
// 2. Árvores AVL
// ==================================================

class AVLNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1; // Altura do nó
    }
}

// Função para calcular a altura de um nó
function getHeight(node) {
    if (node === null) return 0;
    return node.height;
}

// Função para calcular o fator de balanceamento
function getBalanceFactor(node) {
    if (node === null) return 0;
    return getHeight(node.left) - getHeight(node.right);
}

// Função para rotacionar à direita
function rotateRight(y) {
    const x = y.left;
    const T2 = x.right;

    x.right = y;
    y.left = T2;

    // Atualiza alturas
    y.height = Math.max(getHeight(y.left), getHeight(y.right)) + 1;
    x.height = Math.max(getHeight(x.left), getHeight(x.right)) + 1;

    return x;
}

// Função para rotacionar à esquerda
function rotateLeft(x) {
    const y = x.right;
    const T2 = y.left;

    y.left = x;
    x.right = T2;

    // Atualiza alturas
    x.height = Math.max(getHeight(x.left), getHeight(x.right)) + 1;
    y.height = Math.max(getHeight(y.left), getHeight(y.right)) + 1;

    return y;
}

// Função para inserir um valor na AVL
function insertAVL(root, value) {
    if (root === null) return new AVLNode(value); // Caso base: cria um novo nó

    if (value < root.value) {
        root.left = insertAVL(root.left, value); // Insere na subárvore esquerda
    } else if (value > root.value) {
        root.right = insertAVL(root.right, value); // Insere na subárvore direita
    } else {
        return root; // Valores duplicados não são permitidos
    }

    // Atualiza a altura do nó atual
    root.height = 1 + Math.max(getHeight(root.left), getHeight(root.right));

    // Calcula o fator de balanceamento
    const balance = getBalanceFactor(root);

    // Casos de desbalanceamento
    if (balance > 1 && value < root.left.value) {
        return rotateRight(root); // Rotação simples à direita
    }
    if (balance < -1 && value > root.right.value) {
        return rotateLeft(root); // Rotação simples à esquerda
    }
    if (balance > 1 && value > root.left.value) {
        root.left = rotateLeft(root.left); // Rotação dupla à direita
        return rotateRight(root);
    }
    if (balance < -1 && value < root.right.value) {
        root.right = rotateRight(root.right); // Rotação dupla à esquerda
        return rotateLeft(root);
    }

    return root;
}

// ==================================================
// 3. Heaps
// ==================================================

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    // Função para inserir um valor no heap
    insert(value) {
        this.heap.push(value); // Adiciona no final
        this.heapifyUp(this.heap.length - 1); // Ajusta o heap
    }

    // Função para remover o maior valor (raiz)
    extractMax() {
        if (this.heap.length === 0) return null;
        const max = this.heap[0]; // Salva o maior valor
        this.heap[0] = this.heap.pop(); // Substitui a raiz pelo último elemento
        this.heapifyDown(0); // Ajusta o heap
        return max;
    }

    // Função para ajustar o heap para cima
    heapifyUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] <= this.heap[parentIndex]) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]]; // Troca
            index = parentIndex;
        }
    }

    // Função para ajustar o heap para baixo
    heapifyDown(index) {
        const leftChild = 2 * index + 1;
        const rightChild = 2 * index + 2;
        let largest = index;

        if (leftChild < this.heap.length && this.heap[leftChild] > this.heap[largest]) {
            largest = leftChild;
        }
        if (rightChild < this.heap.length && this.heap[rightChild] > this.heap[largest]) {
            largest = rightChild;
        }
        if (largest !== index) {
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]]; // Troca
            this.heapifyDown(largest);
        }
    }
}

// ==================================================
// 4. Grafos
// ==================================================

class Graph {
    constructor() {
        this.adjList = new Map(); // Lista de adjacência
    }

    // Adiciona um vértice ao grafo
    addVertex(vertex) {
        if (!this.adjList.has(vertex)) {
            this.adjList.set(vertex, []);
        }
    }

    // Adiciona uma aresta entre dois vértices
    addEdge(v1, v2) {
        this.adjList.get(v1).push(v2);
        this.adjList.get(v2).push(v1); // Para grafos não direcionados
    }

    // Busca em profundidade (DFS)
    dfs(start) {
        const visited = new Set();
        const stack = [start];

        while (stack.length > 0) {
            const vertex = stack.pop();
            if (!visited.has(vertex)) {
                console.log(vertex);
                visited.add(vertex);
                for (const neighbor of this.adjList.get(vertex)) {
                    stack.push(neighbor);
                }
            }
        }
    }

    // Busca em largura (BFS)
    bfs(start) {
        const visited = new Set();
        const queue = [start];

        while (queue.length > 0) {
            const vertex = queue.shift();
            if (!visited.has(vertex)) {
                console.log(vertex);
                visited.add(vertex);
                for (const neighbor of this.adjList.get(vertex)) {
                    queue.push(neighbor);
                }
            }
        }
    }
}

// ==================================================
// 5. Caminhos Mínimos
// ==================================================

// Algoritmo de Dijkstra (para grafos ponderados)
function dijkstra(graph, start) {
    const distances = {};
    const visited = new Set();
    const pq = []; // Fila de prioridade simples (não otimizada)

    // Inicializa distâncias
    for (const vertex of graph.adjList.keys()) {
        distances[vertex] = Infinity;
    }
    distances[start] = 0;
    pq.push({ vertex: start, distance: 0 });

    while (pq.length > 0) {
        // Ordena a fila de prioridade (não otimizado, mas funcional)
        pq.sort((a, b) => a.distance - b.distance);
        const { vertex, distance } = pq.shift();

        if (visited.has(vertex)) continue;
        visited.add(vertex);

        for (const neighbor of graph.adjList.get(vertex)) {
            const newDistance = distance + 1; // Peso 1 para arestas não ponderadas
            if (newDistance < distances[neighbor]) {
                distances[neighbor] = newDistance;
                pq.push({ vertex: neighbor, distance: newDistance });
            }
        }
    }

    return distances;
}

// Algoritmo de Floyd-Warshall (para todos os pares de caminhos mínimos)
function floydWarshall(graph) {
    const vertices = [...graph.adjList.keys()];
    const n = vertices.length;
    const dist = Array.from({ length: n }, () => Array(n).fill(Infinity));

    // Inicializa distâncias
    for (let i = 0; i < n; i++) {
        dist[i][i] = 0; // Distância de um vértice para ele mesmo é 0
        for (const neighbor of graph.adjList.get(vertices[i])) {
            const j = vertices.indexOf(neighbor);
            dist[i][j] = 1; // Peso 1 para arestas não ponderadas
        }
    }

    // Relaxamento das arestas
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (dist[i][j] > dist[i][k] + dist[k][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }

    return dist;
}


// ==================================================
// Exemplos de uso
// ==================================================

// Árvore Binária de Busca (BST)
let bstRoot = null;
bstRoot = insertBST(bstRoot, 10);
bstRoot = insertBST(bstRoot, 5);
bstRoot = insertBST(bstRoot, 15);
console.log("In-Order Traversal:");
inOrderTraversal(bstRoot); // 5, 10, 15
console.log('------------------------------------------------------');

// Árvore AVL
let avlRoot = null;
avlRoot = insertAVL(avlRoot, 10);
avlRoot = insertAVL(avlRoot, 20);
avlRoot = insertAVL(avlRoot, 30);
console.log("AVL In-Order Traversal:");
inOrderTraversal(avlRoot); // 10, 20, 30
console.log('------------------------------------------------------');

// Max-Heap
const heap = new MaxHeap();
heap.insert(10);
heap.insert(20);
heap.insert(15);
console.log("Max-Heap Extract Max:", heap.extractMax()); // 20
console.log('------------------------------------------------------');

// Grafo
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("B", "C");
console.log("DFS:");
graph.dfs("A"); // A, B, C
console.log("BFS:");
graph.bfs("A"); // A, B, C
console.log('------------------------------------------------------');

// Dijkstra
const distances = dijkstra(graph, "A");
console.log("Dijkstra Distances:", distances); // { A: 0, B: 1, C: 2 }

// Floyd-Warshall
const shortestPaths = floydWarshall(graph);
console.log("Floyd-Warshall Shortest Paths:", shortestPaths); // Matriz de distâncias