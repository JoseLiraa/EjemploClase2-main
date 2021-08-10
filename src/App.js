import {useState, useEffect} from 'react';
import './App.css';


function App() {
  const [dolares, setDolares] = useState(0);
  const [euros, setEuros] = useState(0);
  const [bitcoin, setBitcoin] = useState(0);
  //const [umil, setUmil] = useState(0);
  //const [dmil, setDmil] = useState(0);
  //const [cmil, setCmil] = useState(0);

  const [tipo, setTipo] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    switch (tipo){
    case "1":
    setDolares(total * 46400.30);
    setEuros(total * 39533.19);
    setBitcoin(total * 1);   
    break;
    case "2":
    setDolares(total * 1.17);
    setEuros(total * 1);
    setBitcoin(total * 0.000026);   
    break;
    case "3":
    setDolares(total * 1);
    setEuros(total * 0.85);
    setBitcoin(total * 0.000022);   
    break;
    default:
    break;
  }
  }, [total, tipo]);


  const handleTotalChange = e => {
    if (!isNaN(e.target.value)) {
      setTotal(e.target.value);
    }
  };


  return (
    <div className="App">
      <h1>Convertidor de monedas</h1>

      <p>Dolares: {dolares}</p>
      <p>Euros: {euros}</p>
      <p>Bitcoin: {bitcoin}</p>
     

      <hr />

      <h3>{total}</h3>

      <select onChange={event => setTipo(event.target.value)} value={tipo}>
        <option value={1}>bitcoin</option>  
        <option value={2}>Euro</option>  
        <option value={3}>Dolar Estado Unidense</option>        
      </select>
      <input onChange={handleTotalChange} value={total} />
    </div>
  );
}

export default App;
