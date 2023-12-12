import PropTypes from 'prop-types';
import { fibonacci, primo, triangular } from './tools';
import { serie } from './SeriesCalculation';

export default function CalculationResult({ numberInput }) {
  const numericInput = BigInt(numberInput);
  const triangularResult = numericInput > 0n ? triangular(numericInput + 2n) : 0n;
  const fibonacciResult = numericInput > 0n ? fibonacci(numericInput) : 0n;
  const primoResult = numericInput > 0n ? primo(numericInput - 1n) : 0n;
  const result = numericInput > 0n ? serie(numericInput) : undefined;
  return (
    <>{(result || numericInput > 0n) && (
      <>
        <h2>Resultado</h2>
        <p className='calculation-serie'>{`Serie(${numericInput}) = 2 * triangular(${numericInput} + 2) - 3 * primo(${numericInput} - 1) - 7 * fibonacci(${numberInput})`}</p>
        <p className='calculation-serie'>{`Serie(${numericInput}) = 2 * triangular(${numericInput - (-2n)}) - 3 * primo(${numericInput - 1n}) - 7 * fibonacci(${numberInput})`}</p>
        <p className='calculation-serie'>{`Serie(${numericInput}) = 2 (${triangularResult}) - 3 (${primoResult}) - 7 (${fibonacciResult})`}</p>
        <p className='calculation-serie'>{`Serie(${numericInput}) = ${2n * triangularResult} - ${3n * primoResult} - ${7n * fibonacciResult}`}</p>
        <p className='calculation-serie'>{`Serie(${numericInput}) = ${result}`}</p>
      </>)
    }
    </>
  )
}

CalculationResult.propTypes = {
  numberInput: PropTypes.number,
};