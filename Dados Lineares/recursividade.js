console.log("===============================================");

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

console.log("----------------------------------------------");

function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // Saída: 8

console.log("------------------------------------------");

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

console.log("------------------------------");

let listaSimples10 = null;
function criarInserirNo(valor) {
    return listaSimples = { valor, proximo: null };
}

function retornaResultado(listaSimples) {
    let result
    while (listaSimples){
        result += listaSimples.proximo
    }
    return console.log(result)
}

criarInserirNo(1);
criarInserirNo(2);
criarInserirNo(3);
criarInserirNo(4);
retornaResultado();






