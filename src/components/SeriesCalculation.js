import { fibonacci, primo, triangular } from "./tools";

export function serie(n){
    console.log('valor: ', n)
    console.log('2 * ', triangular(n + 2));
    console.log('- 3 * ', primo(n - 1));
    console.log('- 7 * ', fibonacci(n))
    return 2 * triangular(n + 2) - 3 * primo(n - 1) - 7 * fibonacci(n);
}