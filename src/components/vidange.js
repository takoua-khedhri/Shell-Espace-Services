import React, { useState } from 'react';
import Head from './BarreNavigation';
import FOOTER from './footer';
import './style.css'; // Assurez-vous que le fichier CSS est bien importé

// Importez les images
import taxiImage from '../images/TAXI.jpg'; 
import poloImage from '../images/POLO.jpg'; 

const vidanges = [
  {
    id: 1,
    title: 'Vidange Express',
    description: 'Un service rapide pour changer votre huile moteur en un temps record.',
    duration: '15 minutes',
    price: '  5 TND',
    suitableFor: 'Tous types de véhicules',
    image: poloImage, 
  },
  {
    id: 2,
    title: 'Vidange Taxi',
    description: 'Prix spécial pour nos clients taxi.',
    duration: '15 minutes',
    price: '  3 TND',
    suitableFor: 'Véhicules de taxi',
    image: taxiImage, 
  },
];

const VidangeCard = ({ vidange, onClick }) => {
  return (
    <div className="card mb-4 shadow-sm hover-effect">
      <div className="card-body">
        {/* Afficher l'image */}
        <img
          src={vidange.image}
          alt={vidange.title}
          className="card-img-top mb-3"
          style={{ borderRadius: '10px', maxHeight: '180px', objectFit: 'cover' }}
        />
        <h5 className="card-title text-center">{vidange.title}</h5>
        <p className="card-text text-secondary">{vidange.description}</p>
        <p><strong>Durée :</strong>{vidange.duration}</p>

        {/* Ajout de l'animation pour le prix */}
        <p>
          <strong>Prix :</strong>
          <span className="text-danger price-zoom">{vidange.price} Seulment!!</span>
        </p>

        <p><strong>Convient pour :</strong> <span className="text-warning">{vidange.suitableFor}</span></p>
        <button className="btn btn-warning btn-block" onClick={onClick}>
          Réserver
        </button>
      </div>
    </div>
  );
};

const VidangePage = () => {
  const handleReservationClick = () => {
    window.location.href = 'tel:92519806'; // Rediriger vers le numéro de téléphone
  };

  return (
    <>
      <Head />
      <div className="container my-5">
        <br />
        <h1 className="text-center mb-4" style={{ color: '#FFD700', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
          Nos Services de Vidange
        </h1>
        <div className="row">
          {vidanges.map((vidange) => (
            <div key={vidange.id} className="col-md-6 col-lg-4">
              <VidangeCard vidange={vidange} onClick={handleReservationClick} />
            </div>
          ))}
        </div>
      </div>
      <FOOTER />
    </>
  );
};

export default VidangePage;
