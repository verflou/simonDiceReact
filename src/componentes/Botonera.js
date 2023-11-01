import React from 'react';
import './Botonera.css';

function Botonera (){
const colores = ['rojo', 'azul', 'verde', 'amarillo'];



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
