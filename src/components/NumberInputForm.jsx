import { serie } from "./SeriesCalculation";
import PropTypes from 'prop-types';

export default function SerieForm({ numberInput, setNumber, setResult }) {
  function handleInputChange(e) {
    const inputValue = e.target.value;
    console.log("Parsed Input:", parseInt(inputValue));
    const numericInput = parseInt(inputValue, 10);
    setNumber(numericInput);

    if (numericInput > 0 && inputValue !== '') {
      try {
        const result = serie(numericInput);
        setResult(result);
      } catch {
        console.log('Ha ocurrido un error');
      }
    } else {
      setResult(0);
    }
  }

  return (
    <article>
      <form>
        <input
          type="number"
          onChange={handleInputChange}
          placeholder="Introduce el valor n a calcular"
          className={numberInput > 0 ? "" : "invalid-input"}
        />
        {numberInput <= 0 && <p>Introduce un valor válido</p>}
      </form>
    </article>
  );
}

SerieForm.propTypes = {
  numberInput: PropTypes.number,
  setNumber: PropTypes.func.isRequired,
  setResult: PropTypes.func.isRequired,
};