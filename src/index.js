import React from 'react';
import ReactDOM from 'react-dom/client'; // Import correct pour React 18
import './index.css'; // Optionnel, pour vos styles
import App from './App'; // Assurez-vous que ce chemin est correct

// Créez un root avec ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
