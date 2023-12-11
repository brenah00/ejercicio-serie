export default function serieForm({setNumber, setResult}) {
    function handleInputChange(e){
        setNumber(e.target.value);
    }
    function calculation(){
        setResult(10)
    }
    return (
        <>
        <form>
            <input type="number" onChange ={handleInputChange}/>
            <button onClick={calculation}>Calcular</button>
        </form>
        </>
        
    )
  }