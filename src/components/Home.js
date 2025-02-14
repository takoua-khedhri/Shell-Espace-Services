import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Pour la navigation
import logo from '../images/logo shell.png'; // Assurez-vous que l'image se trouve dans le bon dossier
import '../css/Page_css.css'; // Assurez-vous que le fichier CSS est dans le bon dossier

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirection après 6 secondes vers la page d'accueil
    setTimeout(() => {
      navigate('/Acceuil'); // Redirige vers la route /acceuil
    }, 6000);
  }, [navigate]);

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="text-center p-5 bg-white rounded shadow-lg">
        <h1 className="display-4 fw-bold text-primary mb-4">
          Bienvenue chez <span className="text-success">Espace Sessi!</span>
        </h1>
        <div className="mb-4">
          <img
            src={logo}
            alt="logo"
            title="logo"
            className="img-fluid rounded-circle border border-primary shadow"
            style={{ width: '150px', height: '150px' }}
          />
        </div>
        <p className="lead text-muted">
          Nous vous redirigerons automatiquement vers notre page d'accueil dans quelques secondes...
        </p>
        <div className="spinner-border text-primary mt-3" role="status">
          <span className="visually-hidden">Chargement...</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
