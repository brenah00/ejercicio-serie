import PropTypes from 'prop-types';
import { fibonacci, primo, triangular } from './tools';

export default function CalculationResult({ numberInput, result }) {
    const numericInput = BigInt(numberInput);

  console.log('Original:', numberInput, ' = ', result);
  console.log('BigInt Conversion:', numericInput);

  const triangularResult = numericInput > 0n ? triangular(numericInput + 2n) : 0n;
  console.log('triangular: ', triangularResult);
  
  const fibonacciResult = numericInput > 0n ? fibonacci(numericInput) : 0n;
  console.log('fibonacci: ', fibonacciResult);
  const primoResult = numericInput > 0n ? primo(numericInput - 1n) : 0n;
  console.log('primo: ', primoResult);

    //const serieResult =  numberInput > 0n ? fibonacci(numberInput) : 0n;
    return (
        <>{(result || numericInput > 0n) && (
            <>
                <h2>Resultado</h2>
                <h3>{`Serie(${numericInput}) = 2 * triangular(${numericInput} + 2) - 3 * primo(${numericInput} - 1) - 7 * fibonacci(${numberInput})`}</h3>
                <h3>{`Serie(${numericInput}) = 2 * triangular(${numericInput - (-2n)}) - 3 * primo(${numericInput - 1n}) - 7 * fibonacci(${numberInput})`}</h3>
                <h3>{`Serie(${numericInput}) = ${2n * triangularResult} - ${3n * primoResult} - ${7n * fibonacciResult}`}</h3>
                <h3>{`Serie(${numericInput}) = ${2n * triangularResult - 3n * primoResult - 7n * fibonacciResult}`}</h3>
                <p>`</p>
            </>)
        }
        </>
    )
}

CalculationResult.propTypes = {
    numberInput: PropTypes.number,
    result: PropTypes.bigint,
};