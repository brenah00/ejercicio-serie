import { fibonacci, primo, triangular } from "./tools";

export function serie(n){
    return 2 * triangular(n + 2) - 3 * primo(n - 1) - 7 * fibonacci(n);
}