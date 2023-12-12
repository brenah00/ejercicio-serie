import PropTypes from 'prop-types';

export default function CalculationResult({number}){
    return(
        <>
            <h2>Resultado</h2>
            <p>{number}</p>
        </>
    )
}

CalculationResult.propTypes = {
    number: PropTypes.number,
};