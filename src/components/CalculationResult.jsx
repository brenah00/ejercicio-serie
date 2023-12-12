import PropTypes from 'prop-types';
import { fibonacci, primo, triangular } from './tools';

export default function CalculationResult({ numberInput, result }) {

    const primoResult =  parseInt(numberInput) > 0 ? primo(parseInt(numberInput)- 1) : 0;
    const triangularResult =  parseInt(numberInput) > 0 ? triangular(parseInt(numberInput)+2) : 0;
    const fibonacciResult =  parseInt(numberInput) > 0 ? fibonacci(parseInt(numberInput)) : 0;
    return (
        <>{(result || parseInt(numberInput) > 0) && (
            <>
                <h2>Resultado</h2>
                <h3>Serie({numberInput}) = 2 * triangular({numberInput} + 2) - 3 * primo({numberInput} - 1) - 7 * fibonacci({numberInput})</h3>
                <h3>Serie({numberInput}) = 2 * triangular({numberInput - (-2)}) - 3 * primo({numberInput - 1}) - 7 * fibonacci({numberInput})</h3>
                <h3>Serie({numberInput}) = 2({triangularResult}) - 3({primoResult}) - 7({fibonacciResult})</h3>
                <h3>Serie({numberInput}) = {2 * triangularResult} - {3 * primoResult} - {7 * fibonacciResult}</h3>
                <h3>Serie({numberInput}) = {result}</h3>
            </>)
        }
        </>
    )
}

CalculationResult.propTypes = {
    numberInput: PropTypes.number,
    result: PropTypes.number,
};