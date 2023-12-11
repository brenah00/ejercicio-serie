function isPrimo(number){
    let count = 0;
    for(let i = 0 ; i <= number ; i++){
        if(number % i === 0){
            count++;
        }
    }
    return count === 2;
}

export function triangular(n){
    return (n * (n+1))/2;
}

export function fibonacci(n){
    return n === 0 || n === 1 ? n : fibonacci(n - 1) + fibonacci(n - 2)
}

export function primo(n){
    let i = 0;
    let number = 0;
    
    while( i !== n ){
        if(isPrimo(number)){
            i++;
        }
        number++;
    }
    return number-1;
}