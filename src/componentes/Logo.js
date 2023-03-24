import React from "react";
import '../hojas-de-estilo/Logo.css' 
import freeCodeCampLogo from "../imagenes/freecodecamp-logo.png";

function Logo(props){
    return (
      <div className="freecodecamp-logo-contenedor">
        <img
          src={freeCodeCampLogo}
          className="freecodecamp-logo"
          alt="Logo de freeCodeCamp"
        />
      </div>
    );
 }

 export default Logo;