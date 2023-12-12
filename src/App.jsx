import SerieForm from './components/NumberInputForm.jsx'
import CalculationResult from './components/CalculationResult.jsx';
import './App.css'
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState();
  const [result, setResult] = useState();
  return (
    <>
      <h1>Serie(n)</h1>
      <SerieForm number={number} setNumber={setNumber} setResult={setResult}/>
      <p>{number} = {result} </p>
      <CalculationResult number={result}/>
    </>
  )
}

export default App
