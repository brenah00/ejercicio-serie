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

export function fibonacci(n) {
    n = BigInt(n);
    return n < 0n ? 0n : n === 0n || n === 1n ? n : fibonacci(n - 1n) + fibonacci(n - 2n)
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