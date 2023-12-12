import PropTypes from 'prop-types';
//import { primo, triangular } from './tools';

export default function CalculationResult({numberInput, result}){
    return(
        <>{}
            <h2>Resultado</h2>
            <h3>Serie({numberInput}) = 2 * triangular({numberInput} + 2) - 3 * primo({numberInput} - 1) - 7 * fibonacci({numberInput})</h3>
            <h3>Serie({numberInput}) = 2 * triangular({numberInput - (-2)}) - 3 * primo({numberInput - 1}) - 7 * fibonacci({numberInput})</h3>
            {/* <h3>Serie({numberInput}) = 2 * {triangular(numberInput - (-2))} - 3 * {primo(numberInput - 1)} - 7 * fibonacci({numberInput})</h3> */}
            <p>Serie({numberInput}) = {result}</p>
        </>
    )
}

CalculationResult.propTypes = {
    numberInput: PropTypes.number,
    result: PropTypes.number,
};