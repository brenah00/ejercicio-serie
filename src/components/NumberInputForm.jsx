import { serie } from "./SeriesCalculation";
import PropTypes from 'prop-types';

export default function SerieForm({number, setNumber, setResult}) {
    function handleInputChange(e){
        setNumber(e.target.value);
    }
    function calculation(){
        console.log(number);
        try{
            const result = serie(parseInt(number));
            setResult(result);
        }
        catch{
            console.log('Ha ocurrido un error');
        }
        
    }
    return (
        <>
        <form>
            <input type="number" onChange ={handleInputChange}/>
            <button type="button" onClick={calculation}>Calcular</button>
        </form>
        </>
        
    )
  }

  SerieForm.propTypes = {
    number: PropTypes.number,
    setNumber: PropTypes.func.isRequired,
    setResult: PropTypes.func.isRequired,
};