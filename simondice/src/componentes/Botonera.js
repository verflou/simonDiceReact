import React, { useState, useEffect } from 'react';
import './Botonera.css';

function Botonera() {
  const coloresDisponibles = ["rojo", "azul", "verde", "amarillo"];
  const [secuenciaGenerada, setSecuenciaGenerada] = useState([]);
  const [secuenciaUsuario, setSecuenciaUsuario] = useState([]);
  const [rondaActual, setRondaActual] = useState(1);
  const [jugando, setJugando] = useState(false);

  const generarNuevaSecuencia = () => {
    const nuevoColor = coloresDisponibles[Math.floor(Math.random() * coloresDisponibles.length)];
    setSecuenciaGenerada((secuenciaAnterior) => [...secuenciaAnterior, nuevoColor]);
    console.log(nuevoColor);
  };

  const iniciarJuego = () => {
    setSecuenciaGenerada([]);
    setSecuenciaUsuario([]);
    setRondaActual(1);
    generarNuevaSecuencia();
    setJugando(true);
  };

  const comenzarNuevaRonda = () => {
    setSecuenciaUsuario([]);
    generarNuevaSecuencia();
    setRondaActual((rondaAnterior) => rondaAnterior + 1);
  };

  const manejarClicColor = (color) => {
    if (jugando) {
      setSecuenciaUsuario((secuenciaAnterior) => [...secuenciaAnterior, color]);
    }
  };

  useEffect(() => {
    if (secuenciaUsuario.length === secuenciaGenerada.length) {
      if (JSON.stringify(secuenciaUsuario) === JSON.stringify(secuenciaGenerada)) {
        if (rondaActual < 20) {
          comenzarNuevaRonda();
        } else {
          alert('¡Ganaste el juego!');
          setJugando(false);
        }
      } else {
        alert('¡Perdiste! Intenta de nuevo.');
        setJugando(false);
      }
    }
  }, [secuenciaUsuario, secuenciaGenerada, rondaActual]);

  return (
    <div className="simon">

      <button onClick={iniciarJuego}>Comenzar Juego</button>
      {coloresDisponibles.map((color) => (
        <button
          key={color}
          className={`boton ${color}`}
          onClick={() => manejarClicColor(color)}
        ></button>
      ))}
      <div>
        <p>Ronda: {rondaActual}</p>
        {jugando && <p>¡Tu turno!</p>}
      </div>
    </div>
  );
}

export default Botonera;
