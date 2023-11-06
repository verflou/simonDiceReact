import React from 'react';
import './Botonera.css';

function Botonera (){
  const colores = ['rojo', 'azul', 'verde', 'amarillo'];
    for (let i = 0; i < colores.length; i++) {
      const colorAl = colores[i];
      colorAl = Math.floor(Math.random([colorAl]));
      console.log(colorAl);
    }
    
  return (
    <div className="simon">
      <button className="boton rojo"></button>
      <button className="boton azul"></button>
      <button className="boton verde"></button>
      <button className="boton amarillo"></button>
    </div>
  );
};

export default Botonera;
