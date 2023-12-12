import SerieForm from './components/NumberInputForm.jsx'
import CalculationResult from './components/CalculationResult.jsx';
import imgSerie from './assets/serie.webp'
import './App.css'
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState(0n);
  return (
    <section>
      <h1>Serie(n)</h1>
      <p>Calculadora basada en la siguiente expresión matemática.</p>
      <img src={imgSerie} alt="Formula de la serie" />
      <SerieForm numberInput={number} setNumber={setNumber}/>
      <CalculationResult numberInput={parseInt(number)}/>
    </section>
  )
}

export default App
