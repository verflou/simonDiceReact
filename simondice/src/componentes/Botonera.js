import React, { useState, useEffect } from 'react';
import './Botonera.css';

function Botonera() {
  const colors = ["rojo", "azul", "verde", "amarillo"];
  const [sequence, setSequence] = useState([]);
  const [userSequence, setUserSequence] = useState([]);
  const [round, setRound] = useState(1);
  const [isStrictMode, setIsStrictMode] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Genera una nueva secuencia en cada ronda
  const generateSequence = () => {
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    setSequence((prevSequence) => [...prevSequence, newColor]);
    console.log(newColor);
  };

  // Inicia un nuevo juego
  const startGame = () => {
    setSequence([]);
    setUserSequence([]);
    setRound(1);
    generateSequence();
    setIsPlaying(true);
  };

  // Comienza una nueva ronda
  const startNewRound = () => {
    setUserSequence([]);
    generateSequence();
    setRound((prevRound) => prevRound + 1);
  };

  // Maneja el clic del usuario en un botón
  const handleColorClick = (color) => {
    if (isPlaying) {
      setUserSequence((prevUserSequence) => [...prevUserSequence, color]);
    }
  };

  // Comprueba si la secuencia del usuario coincide con la secuencia generada
  useEffect(() => {
    if (userSequence.length === sequence.length) {
      if (JSON.stringify(userSequence) === JSON.stringify(sequence)) {
        if (round < 20) {
          startNewRound();
        } else {
          alert('¡Ganaste el juego!');
          setIsPlaying(false);
        }
      } else {
        alert('¡Perdiste! Intenta de nuevo.');
        setIsPlaying(false);
      }
    }
  }, [userSequence, sequence, round]);

  return (
    <div className="simon">
      <h2>Simon Classic</h2>
      <button onClick={startGame}>Comenzar Juego</button>
      {colors.map((color) => (
        <button
          key={color}
          className={`boton ${color}`}
          onClick={() => handleColorClick(color)}
        ></button>
      ))}
      <div>
        <p className='ronda'>Ronda: {round}</p>
        {isPlaying && <p>¡Tu turno!</p>}
      </div>
    </div>
  );
}

export default Botonera;