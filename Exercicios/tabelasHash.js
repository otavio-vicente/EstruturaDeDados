// ==================================================
// 1. Funções de Hash
// ==================================================

// Função de hash para chaves inteiras
function hashInt(key, tableSize) {
    return key % tableSize; // Retorna o índice usando o operador módulo
}

// Função de hash para strings
function hashString(key, tableSize) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i); // Soma os valores ASCII dos caracteres
    }
    return hash % tableSize; // Retorna o índice usando o operador módulo
}

// ==================================================
// 2. Encadeamento (Chaining)
// ==================================================

class HashTableChaining {
    constructor(size = 10) {
        this.size = size;
        this.table = new Array(size).fill(null).map(() => []); // Array de listas vazias
    }

    // Função de hash (usa a função de hash para strings)
    hash(key) {
        return hashString(key, this.size);
    }

    // Insere um par (chave, valor)
    insert(key, value) {
        const index = this.hash(key);
        const bucket = this.table[index];

        // Verifica se a chave já existe
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket[i][1] = value; // Atualiza o valor se a chave existir
                return;
            }
        }

        // Adiciona um novo par (chave, valor)
        bucket.push([key, value]);
    }

    // Busca um valor pela chave
    search(key) {
        const index = this.hash(key);
        const bucket = this.table[index];

        // Procura a chave na lista
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                return bucket[i][1]; // Retorna o valor se a chave for encontrada
            }
        }

        return null; // Retorna null se a chave não existir
    }

    // Remove um par (chave, valor)
    remove(key) {
        const index = this.hash(key);
        const bucket = this.table[index];

        // Procura a chave na lista
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1); // Remove o par (chave, valor)
                return;
            }
        }
    }
}

// ==================================================
// 3. Endereçamento Aberto (Probing Linear)
// ==================================================

class HashTableProbing {
    constructor(size = 10) {
        this.size = size;
        this.table = new Array(size).fill(null); // Array de pares (chave, valor)
    }

    // Função de hash (usa a função de hash para strings)
    hash(key) {
        return hashString(key, this.size);
    }

    // Insere um par (chave, valor)
    insert(key, value) {
        let index = this.hash(key);

        // Procura um índice vazio ou com a mesma chave
        while (this.table[index] !== null && this.table[index][0] !== key) {
            index = (index + 1) % this.size; // Probing linear
        }

        this.table[index] = [key, value]; // Insere o par (chave, valor)
    }

    // Busca um valor pela chave
    search(key) {
        let index = this.hash(key);

        // Procura a chave na tabela
        while (this.table[index] !== null) {
            if (this.table[index][0] === key) {
                return this.table[index][1]; // Retorna o valor se a chave for encontrada
            }
            index = (index + 1) % this.size; // Probing linear
        }

        return null; // Retorna null se a chave não existir
    }

    // Remove um par (chave, valor)
    remove(key) {
        let index = this.hash(key);

        // Procura a chave na tabela
        while (this.table[index] !== null) {
            if (this.table[index][0] === key) {
                this.table[index] = null; // Remove o par (chave, valor)
                return;
            }
            index = (index + 1) % this.size; // Probing linear
        }
    }
}

// ==================================================
// 4. Comparação de Técnicas de Tratamento de Colisões
// ==================================================

// Função para medir o desempenho de uma tabela hash
function measurePerformance(hashTable, operations) {
    const startTime = performance.now();

    for (const [op, key, value] of operations) {
        if (op === "insert") {
            hashTable.insert(key, value);
        } else if (op === "search") {
            hashTable.search(key);
        } else if (op === "remove") {
            hashTable.remove(key);
        }
    }

    const endTime = performance.now();
    return endTime - startTime; // Retorna o tempo em milissegundos
}

// Gera 1000 operações de inserção, busca e remoção
function generateOperations() {
    const operations = [];
    for (let i = 0; i < 1000; i++) {
        const key = `key${i}`;
        const value = `value${i}`;
        operations.push(["insert", key, value]);
        if (i % 2 === 0) operations.push(["search", key, null]);
        if (i % 3 === 0) operations.push(["remove", key, null]);
    }
    return operations;
}

// Compara o desempenho de encadeamento e probing linear
function comparePerformance() {
    const operations = generateOperations();

    const hashTableChaining = new HashTableChaining(1000);
    const hashTableProbing = new HashTableProbing(1000);

    const timeChaining = measurePerformance(hashTableChaining, operations);
    const timeProbing = measurePerformance(hashTableProbing, operations);

    console.log(`Encadeamento: ${timeChaining.toFixed(2)} ms`);
    console.log(`Probing Linear: ${timeProbing.toFixed(2)} ms`);
}

// ==================================================
// 5. Aplicação Prática de Tabela Hash (Dicionário)
// ==================================================

class Dictionary {
    constructor() {
        this.hashTable = new HashTableChaining(100); // Usa encadeamento
    }

    // Adiciona uma palavra e seu significado
    addWord(word, meaning) {
        this.hashTable.insert(word, meaning);
    }

    // Busca o significado de uma palavra
    searchWord(word) {
        return this.hashTable.search(word);
    }

    // Remove uma palavra do dicionário
    removeWord(word) {
        this.hashTable.remove(word);
    }
}

// ==================================================
// 6. Análise de Desempenho
// ==================================================

function analyzePerformance() {
    const sizes = [50, 100, 250];
    const hashTable = new HashTableChaining();

    for (const size of sizes) {
        hashTable.size = size;
        hashTable.table = new Array(size).fill(null).map(() => []); // Reinicializa a tabela
        const startTime = performance.now();

        // Insere 500 elementos
        for (let i = 0; i < 500; i++) {
            hashTable.insert(`key${i}`, `value${i}`);
        }

        // Busca e remove elementos
        for (let i = 0; i < 500; i++) {
            hashTable.search(`key${i}`);
            if (i % 2 === 0) hashTable.remove(`key${i}`);
        }

        const endTime = performance.now();
        console.log(`Tamanho ${size}: ${(endTime - startTime).toFixed(2)} ms`);
    }
}

// ==================================================
// 7. Função de Hash Personalizada
// ==================================================

function customHash(key, tableSize) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
        hash = (hash << 5) - hash + key.charCodeAt(i); // Distribuição uniforme
        hash |= 0; // Converte para inteiro de 32 bits
    }
    return Math.abs(hash) % tableSize;
}

// Testa a função de hash personalizada
function testCustomHash() {
    const tableSize = 100;
    const indexCounts = new Array(tableSize).fill(0);

    // Gera 1000 strings aleatórias
    for (let i = 0; i < 1000; i++) {
        const key = `key${Math.random().toString(36).substring(2, 15)}`;
        const index = customHash(key, tableSize);
        indexCounts[index]++;
    }

    console.log("Distribuição de índices:", indexCounts);
}

// ==================================================
// Exemplos de uso
// ==================================================
console.log("===========================================");

// Funções de hash
console.log("Hash de 42 (tamanho 10):", hashInt(42, 10)); // 2
console.log('Hash de "hello" (tamanho 10):', hashString("hello", 10)); // 7
console.log('-------------------------------------------');

// Encadeamento
const hashTableChaining = new HashTableChaining();
hashTableChaining.insert("name", "Alice");
hashTableChaining.insert("age", 25);
console.log("Busca por 'name':", hashTableChaining.search("name")); // Alice
hashTableChaining.remove("age");
console.log("Busca por 'age':", hashTableChaining.search("age")); // null
console.log('-------------------------------------------');

// Probing Linear
const hashTableProbing = new HashTableProbing();
hashTableProbing.insert("name", "Bob");
hashTableProbing.insert("age", 30);
console.log("Busca por 'name':", hashTableProbing.search("name")); // Bob
hashTableProbing.remove("age");
console.log("Busca por 'age':", hashTableProbing.search("age")); // null
console.log('-------------------------------------------');

// Comparação de desempenho
comparePerformance();
console.log('-------------------------------------------');

// Dicionário
const dictionary = new Dictionary();
dictionary.addWord("apple", "A fruit");
dictionary.addWord("banana", "Another fruit");
console.log("Significado de 'apple':", dictionary.searchWord("apple")); // A fruit
dictionary.removeWord("banana");
console.log("Significado de 'banana':", dictionary.searchWord("banana")); // null
console.log('-------------------------------------------');

// Análise de desempenho
analyzePerformance();
console.log('-------------------------------------------');

// Função de hash personalizada
testCustomHash();