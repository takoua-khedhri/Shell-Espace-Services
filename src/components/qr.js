import React from 'react';
import QRCodeComponent from './QRCodeComponent'; // Assurez-vous d'importer le composant QR Code

const App = () => {
  return (
    <div>
      <h1>Bienvenue sur notre site</h1>
      <QRCodeComponent />  {/* Affiche le QR code */}
    </div>
  );
};

export default App;
