import "./App.css";
import Boton from "./componentes/Boton";
import Pantalla from "./componentes/Pantalla";
import BotonClear from "./componentes/BotonClear";
import Logo from "./componentes/Logo";
import { useState } from "react";
import { evaluate } from "mathjs";


function App() {
  const [input, setInput] = useState('');

  const agregarInput = val => {
    var control = true;
    if(input.length<1 && isNaN(Number(val.slice(-1)))){
      control = false
    }

    if(isNaN(Number(val.slice(-1))) && isNaN(Number(String(input).slice(-1)))){
      control = false
      const operador = input.substring(0, input.length - 1)
      setInput(operador + val);

    }

    if(control){
      setInput(input + val);
    }

  }

  const calcularResultado = () => {
    if(input){
      if(!isNaN(Number(input.slice(-1)))){
        setInput(evaluate(input));
      }else{
        alert("Malformed Operation")
      }
    } else {
      alert("Ingrese valores");
    }
  };

  return (
    <div className="App">
      <Logo/>
      <div className="contenedor-calculadora">
        <Pantalla input={input}/>
      <div className='fila'>
        <Boton manejarClic={agregarInput}>1</Boton>
        <Boton manejarClic={agregarInput}>2</Boton>
        <Boton manejarClic={agregarInput}>3</Boton>
        <Boton manejarClic={agregarInput}>+</Boton>
      </div>
      <div className='fila'>
      <Boton manejarClic={agregarInput}>4</Boton>
      <Boton manejarClic={agregarInput}>5</Boton>
      <Boton manejarClic={agregarInput}>6</Boton>
      <Boton manejarClic={agregarInput}>-</Boton>
      </div>
      <div className='fila'>
      <Boton manejarClic={agregarInput}>7</Boton>
      <Boton manejarClic={agregarInput}>8</Boton>
      <Boton manejarClic={agregarInput}>9</Boton>
      <Boton manejarClic={agregarInput}>*</Boton>
      </div>
      <div className='fila'>
      <Boton manejarClic={calcularResultado}>=</Boton>
      <Boton manejarClic={agregarInput}>0</Boton>
      <Boton manejarClic={agregarInput}>.</Boton>
      <Boton manejarClic={agregarInput}>/</Boton>
      </div>
      <div className='fila'>
        <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
      </div>
      </div>
      </div>
   );
}

export default App;
