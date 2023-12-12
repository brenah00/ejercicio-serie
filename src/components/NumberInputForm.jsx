import { serie } from "./SeriesCalculation";
import PropTypes from 'prop-types';

export default function SerieForm({ numberInput, setNumber, setResult }) {
  function handleInputChange(e) {
    setNumber(e.target.value);
  }
  function calculation() {
    console.log(numberInput);
    try {
      const result = serie(parseInt(numberInput));
      setResult(result);
    }
    catch {
      console.log('Ha ocurrido un error');
    }

  }
  return (
    <>
      <article>
        <form>
          <input type="number" onChange={handleInputChange}
          placeholder="Introduce el valor n a calcular"
            className={numberInput >= 0 ? "" : "invalid-input"}
          />
          { numberInput <= 0 ? <p>Introduce un valor válido</p> : null }
          <button type="button" onClick={calculation}
            className={numberInput >= 0 ? "btn-calculation" : "btn-disabled"}
            disabled={numberInput >= 0 ? false : true}>Calcular</button>
        </form>
      </article>
    </>

  )
}

SerieForm.propTypes = {
  numberInput: PropTypes.number,
  setNumber: PropTypes.func.isRequired,
  setResult: PropTypes.func.isRequired,
};