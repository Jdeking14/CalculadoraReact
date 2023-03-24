import React from "react";
import '../hojas-de-estilo/Boton.css' 
function Boton(propio){
    const esOperador = valor =>{
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    };
    return (
        <div
            className={`boton-contenedor ${esOperador(propio.children) ? 'operador' : ''}`} 
            onClick={() => propio.manejarClic(propio.children)}>
            
            {propio.children}
        </div>
    );
 }

 export default Boton;