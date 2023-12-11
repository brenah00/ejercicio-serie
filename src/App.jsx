import SerieForm from './components/NumberInputForm.jsx'
//import CalculationResult from './components/CalculationResult.jsx';
import './App.css'
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState();
  return (
    <>
      <h1>Serie(n)</h1>
      <SerieForm setNumber={setNumber} setResult={setResult}/>
      <p>{number} = {result} </p>
      {/*<CalculationResult number={number}/> */}
    </>
  )
}

export default App
