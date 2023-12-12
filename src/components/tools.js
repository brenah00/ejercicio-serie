function isPrimo(number) {
    let count = 0;
    for (let i = 0; i <= number; i++) {
        if (number % i === 0) {
            count++;
        }
    }
    return count === 2;
}

export function triangular(n) {
    return n <= 0 ? 0 : (n * (n + 1)) / 2;
}

export function fibonacci(n) {
    return n < 0 ? 0 : n === 0 || n === 1 ? n : fibonacci(n - 1) + fibonacci(n - 2)
}

export function primo(n) {
    let i = 0;
    let number = 0;

    while (i !== n) {
        if (isPrimo(number)) {
            i++;
        }
        number++;
    }

    return n <= 0 ? 0 : number - 1;
}
export function calculationProcess(n) {
    return [`Serie(${n}) = 2 * triangular(${n} + 2) - 3 * primo(${n} - 1) - 7 * fibonacci(${n})`,
    `Serie(${n}) = 2 * triangular(${n - (-2)}) - 3 * primo(${n - 1}) - 7 * fibonacci(${n})`]
    /*
     <h3>Serie({numberInput}) = 2 * triangular({numberInput} + 2) - 3 * primo({numberInput} - 1) - 7 * fibonacci({numberInput})</h3>
            <h3>Serie({numberInput}) = 2 * triangular({numberInput - (-2)}) - 3 * primo({numberInput - 1}) - 7 * fibonacci({numberInput})</h3>
            */
}