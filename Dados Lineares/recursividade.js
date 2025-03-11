
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

const fib = (n, memo) => {
    memo = memo || {}

    if (memo[n]) return memo[n]

    if (n <= 1) return 1
    return memo[n] = fib(n-1, memo) + fib(n-2, memo)
}



