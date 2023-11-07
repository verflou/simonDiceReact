import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; // Asegúrate de que la ruta del import sea correcta

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Mantén el código relacionado con reportWebVitals en el mismo archivo (no en reportWebVitals.js)
reportWebVitals(onPerfEntry);
