import PropTypes from 'prop-types';

export default function SerieForm({ numberInput, setNumber }) {
  function handleInputChange(e) {
    const inputValue = e.target.value;
    const numericInput = BigInt(inputValue);
    setNumber(numericInput);
  }

  return (
    <article>
      <form>
        <input
          type="number"
          onChange={handleInputChange}
          placeholder="Valor n a calcular"
          className={numberInput > 0 ? "" : "invalid-input"}
        />
        {numberInput < 0 && <p className='invalid-input-ms'>* Introduce un valor válido (positivo)</p>}
      </form>
    </article>
  );
}

SerieForm.propTypes = {
  numberInput: PropTypes.any,
  setNumber: PropTypes.func.isRequired,
};