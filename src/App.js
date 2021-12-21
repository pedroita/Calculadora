import React, { useState } from 'react';

import './App.css';
import './index.css'


function App() {
  const [numero1, setNumero1] = useState(0)
  const [numero2, setNumero2] = useState(0)
  const [resultado, setResultado] = useState(0)

  const somatudo = () => {
    setResultado(numero1 + numero2);
  }



  return (
    <div className='App'>
      <h1 className='Titulo' >{process.env.REACT_APP_SITE_TITLE}</h1>
      <input onChange={(e) => setNumero1(Number(e.target.value))} className="numero1" type="number" />
      <input onChange={(e) => setNumero2(Number(e.target.value))} className="numero2" type="number" /><br></br><br></br>
      <button className="botao" onClick={() => somatudo()}>+</button>
      <h3 className="Resultado">Resultado: {resultado}</h3>



    </div >

  );
}

export default App;
