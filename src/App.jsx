import SerieForm from './components/NumberInputForm.jsx'
import CalculationResult from './components/CalculationResult.jsx';
import './App.css'
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState(0);
  return (
    <section>
      <h1>Serie(n)</h1>
      <SerieForm numberInput={number} setNumber={setNumber} setResult={setResult}/>
      <CalculationResult numberInput={parseInt(number)} result={result}/>
    </section>
  )
}

export default App
