import { fibonacci, primo, triangular } from "./tools";

export function serie(n){
    n = BigInt(n);
    return 2n * triangular(n + 2n) - 3n * primo(n - 1n) - 7n * fibonacci(n);
}