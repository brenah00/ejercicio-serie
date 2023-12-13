function isPrimo(number) {
    const sqrtNumber = BigInt(Math.floor(Math.sqrt(Number(number))));
    for (let i = 3n; i <= sqrtNumber; i += 2n) {
        if (number % i === 0n) {
            return false;
        }
    }
    return true;
}

export function triangular(n) {
    n = BigInt(n);
    return n <= 0n ? 0n : (n * (n + 1n)) / 2n;
}

//MAYOR COMPLEJIDAD ALGORITMICA
//export function fibonacci-recursivo(n) {
//    n = BigInt(n);
//    return n < 0n ? 0n : n === 0n || n === 1n ? n : fibonacci(n - 1n) + fibonacci(n - 2n)
//}

//MENOR COMPLEJIDAD ALGORITMICA
export function fibonacci(n) {
    n = BigInt(n);
    if (n < 0) { return 0n; }
    if (n <= 1) { return n; }

    let fibonacci_2 = 0n;
    let fibonacci_1 = 1n;
  
    for (let i = 2n; i <= n; i++) {
      let aux = fibonacci_2 + fibonacci_1;
      fibonacci_2 = fibonacci_1;
      fibonacci_1 = aux;
    }
  
    return BigInt(fibonacci_1);
  }

export function primo(n) {
    n = BigInt(n);
    if (n <= 0n) { return 0n; }
    if (n === 1n) { return 2n; }

    let count = 1n; 
    let number = 3n;

    while (count !== n) {
        if (isPrimo(number)) {
            count++;
        }
        number += 2n;
    }
    return number - 2n;
}