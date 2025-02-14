import React from 'react';
import { QRCode } from 'qrcode.react'; // Importer la bibliothèque

const QRCodeComponent = () => {
  const websiteUrl = "https://www.votresite.com"; // Remplacez par l'URL de votre site

  return (
    <div className="qr-code-container" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Scannez ce QR Code pour ouvrir notre site web</h2>
      <QRCode value={websiteUrl} size={256} level="H" includeMargin={true} />
      <p>Scannez le QR code avec votre téléphone pour accéder à notre site</p>
    </div>
  );
};

export default QRCodeComponent;
