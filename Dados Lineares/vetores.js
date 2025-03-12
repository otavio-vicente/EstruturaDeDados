// let listaSimples1 = null; // Início da lista

// function adicionarSimples(valor) {
//     let novoNo = { data: valor, next: listaSimples1 };
//     listaSimples1 = novoNo;
// }



// function exibirSimples() {
//     let atual = listaSimples1;
//     let resultado = "";
//     while (atual) {
//         resultado += atual.data + " -> ";
//         atual = atual.next;
//     }
//     console.log(resultado + "null");
// }

// // Teste no console
// adicionarSimples(3);
// adicionarSimples(2);
// adicionarSimples(1);
// exibirSimples(); // Saída: 1 -> 2 -> 3 -> null


// console.log("=======================");


// let listaDuplaTeste = null; // Início da lista
// let ultimo = null; // Último nó

// function adicionarDupla(valor) {
//     let novoNo = { data: valor, next: listaDuplaTeste, prev: null };
//     if (listaDuplaTeste) listaDuplaTeste.prev = novoNo;
//     listaDuplaTeste = novoNo;
//     if (!ultimo) ultimo = novoNo;
// }

// function exibirDupla() {
//     let atual = listaDuplaTeste;
//     let resultado = "";
//     while (atual) {
//         resultado += atual.data + " <-> ";
//         atual = atual.next;
//     }
//     console.log(resultado + "null");
// }

// // Teste no console
// adicionarDupla(3);
// adicionarDupla(2);
// adicionarDupla(1);
// exibirDupla(); // Saída: 1 <-> 2 <-> 3 <-> null

// console.log("===========================");


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
function criarNo(valor) {
    return { valor, proximo: null }; //Isso é um nó
}
let listaSimples = null;
function inserirInicioListaSimples(valor) {
    listaSimples = { valor, proximo: listaSimples };
    console.log("Lista após inserção no início:", listaSimples);
}
function inserirFimListaSimples(valor) {
    let novoNo = criarNo(valor);
    if (!listaSimples) {
        listaSimples = novoNo;
    } else {
        let atual = listaSimples;
        while (atual.proximo) {
            atual = atual.proximo;
        }
        atual.proximo = novoNo;
    }
    console.log("Lista após inserção no fim:", listaSimples);
}
function removerDaListaSimples() {
    listaSimples = listaSimples.proximo;
    console.log("Lista após remoção:", listaSimples);
} 

// Testes
inserirInicioListaSimples(10);
inserirInicioListaSimples(15);
inserirInicioListaSimples(30);
inserirFimListaSimples(20);
removerDaListaSimples(30);

// criarNo(valor): Cria um nó com um valor e ponteiro proximo nulo.
// inserirInicioListaSimples(valor): Insere um nó no início da lista.
// inserirFimListaSimples(valor): Insere um nó no final da lista.
// removerDaListaSimples(): Remove o primeiro nó da lista.
console.log('------------------------------------------------------');

// 3. Lista Duplamente Encadeada
let listaDupla = { head: null, tail: null };
function inserirInicioListaDupla(valor) {
    listaDupla.head = { valor, anterior: null, proximo: listaDupla.head };
    if (!listaDupla.tail) listaDupla.tail = listaDupla.head;
    console.log("Lista dupla após inserção no início:", listaDupla);
}
function removerFimListaDupla() {
    listaDupla.tail = listaDupla.tail.anterior;
    console.log("Lista dupla após remoção do fim:", listaDupla);
}
function percorrerListaDupla() {
    let atual = listaDupla.head;
    console.log("Lista dupla percorrida:");
    while (atual) {
        console.log(atual.valor);
        atual = atual.proximo;
    }
}
// Testes
inserirInicioListaDupla(30);
removerFimListaDupla();
percorrerListaDupla();
console.log('------------------------------------------------------');

// 4. Pilha
let pilha = [];
function pushPilha(elemento) {
    pilha.push(elemento);
    console.log("Pilha após push:", pilha);
}
function popPilha() {
    console.log("Elemento removido da pilha:", pilha.pop());
    console.log("Pilha após pop:", pilha);
}
// Testes
pushPilha(40);
pushPilha(50);
popPilha();
console.log('------------------------------------------------------');

// 5. Fila
let fila = [];
function enqueueFila(elemento) {
    fila.push(elemento);
    console.log("Fila após enqueue:", fila);
}
function dequeueFila() {
    console.log("Elemento removido da fila:", fila.shift());
    console.log("Fila após dequeue:", fila);
}
// Testes
enqueueFila("Cliente1");
enqueueFila("Cliente2");
dequeueFila();

// Simulação de fila do banco
function chegadaClienteBanco(cliente) {
    fila.push(cliente);
    console.log("Fila do banco após chegada de cliente:", fila);
}
function atenderClienteBanco() {
    console.log("Cliente atendido:", fila.shift());
    console.log("Fila do banco após atendimento:", fila);
}
// Testes
chegadaClienteBanco("João");
chegadaClienteBanco("Maria");
atenderClienteBanco();
