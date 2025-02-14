import React, { useState } from 'react';
import Head from './BarreNavigation';
import FOOTER from './footer';
import HX7 from '../images/hx7.jpg';
import HX5 from '../images/HX5.png';
import HX3 from '../images/HX3.jpg';
import GTL from '../images/GTL.jpg';
import R4 from '../images/R4.jpg';
import R3 from '../images/R3.jpg';
import './huile.css'; // Fichier CSS pour le style moderne

// Liste des marques et modèles
const marques = ['Renault', 'Peugeot', 'Citroën', 'Toyota', 'Ford', 'Volkswagen'];
const modelesParMarque = {
  Renault: ['Clio', 'Megane', 'Captur', 'Kadjar'],
  Peugeot: ['208', '308', '3008', '5008'],
  Citroën: ['C3', 'C4', 'C5 Aircross', 'Berlingo'],
  Toyota: ['Yaris', 'Corolla', 'RAV4', 'Prius'],
  Ford: ['Fiesta', 'Focus', 'Kuga', 'Mustang'],
  Volkswagen: ['Golf', 'Polo', 'Tiguan', 'Passat'],
};

const huiles = [
  {
    id: 1,
    image: HX7,
    title: 'Shell Helix HX7',
    description: 'Huile synthétique offrant une protection supérieure pour les moteurs modernes.',
    km: 'Jusqu\'à 15,000 km',
    suitableFor: 'Voitures essence et diesel modernes',
  },
  {
    id: 2,
    image: HX5,
    title: 'Shell Helix HX5',
    description: 'Huile minérale offrant une protection fiable pour les moteurs plus anciens.',
    km: 'Jusqu\'à 10,000 km',
    suitableFor: 'Voitures essence et diesel plus anciennes',
  },
  {
    id: 3,
    image: HX3,
    title: 'Shell Helix HX3',
    description: 'Huile minérale économique pour les moteurs à essence et diesel.',
    km: 'Jusqu\'à 7,500 km',
    suitableFor: 'Voitures essence et diesel d\'entrée de gamme',
  },
  {
    id: 4,
    image: GTL,
    title: 'Shell Helix Ultra GTL',
    description: 'Huile synthétique de pointe fabriquée à partir de gaz naturel, offrant une performance et une protection exceptionnelles.',
    km: 'Jusqu\'à 20,000 km',
    suitableFor: 'Voitures essence et diesel haut de gamme',
  },
  {
    id: 5,
    image: R4,
    title: 'Shell Helix R4',
    description: 'Huile synthétique spécialement formulée pour les moteurs diesel modernes.',
    km: 'Jusqu\'à 15,000 km',
    suitableFor: 'Voitures diesel modernes',
  },
  {
    id: 6,
    image: R3,
    title: 'Shell Helix R3',
    description: 'Huile minérale pour moteurs diesel, offrant une protection de base.',
    km: 'Jusqu\'à 10,000 km',
    suitableFor: 'Voitures diesel plus anciennes',
  },
];

const HuilePage = () => {
  const [selectedHuile, setSelectedHuile] = useState(null);
  const [formData, setFormData] = useState({
    marque: '',
    modele: '',
    kilometrage: '',
    typeMoteur: 'essence', // Par défaut : essence
  });
  const [recommendedHuile, setRecommendedHuile] = useState(null);
  const [modeles, setModeles] = useState([]); // Liste des modèles en fonction de la marque sélectionnée

  const handleSelectHuile = (huile) => {
    setSelectedHuile(huile);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Mettre à jour la liste des modèles lorsque la marque change
    if (name === 'marque') {
      setModeles(modelesParMarque[value] || []); // Charger les modèles correspondants
      setFormData((prevData) => ({ ...prevData, modele: '' })); // Réinitialiser le modèle sélectionné
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Logique pour recommander une huile en fonction des données du formulaire
    const { kilometrage, typeMoteur } = formData;
    let huileRecommande = null;

    if (typeMoteur === 'essence') {
      if (kilometrage <= 7500) {
        huileRecommande = huiles.find((huile) => huile.id === 3); // HX3
      } else if (kilometrage <= 15000) {
        huileRecommande = huiles.find((huile) => huile.id === 1); // HX7
      } else {
        huileRecommande = huiles.find((huile) => huile.id === 4); // GTL
      }
    } else if (typeMoteur === 'diesel') {
      if (kilometrage <= 10000) {
        huileRecommande = huiles.find((huile) => huile.id === 6); // R3
      } else if (kilometrage <= 15000) {
        huileRecommande = huiles.find((huile) => huile.id === 5); // R4
      } else {
        huileRecommande = huiles.find((huile) => huile.id === 4); // GTL
      }
    }

    setRecommendedHuile(huileRecommande);
  };

  return (
    <div className="huile-page">
      <Head />
      <header className="header">
        <h1>Huiles Moteur pour Voiture Shell Helix</h1>
        <p>Offrez à votre moteur la protection qu’il mérite avec nos lubrifiants haut de gamme.</p>
      </header>

      <section className="form-section">
        <h2>Trouvez l'huile adaptée à votre véhicule</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label>Marque de la voiture :</label>
            <select
              name="marque"
              value={formData.marque}
              onChange={handleFormChange}
              required
            >
              <option value="">Sélectionnez une marque</option>
              {marques.map((marque) => (
                <option key={marque} value={marque}>
                  {marque}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Modèle de la voiture :</label>
            <select
              name="modele"
              value={formData.modele}
              onChange={handleFormChange}
              required
              disabled={!formData.marque} // Désactiver si aucune marque n'est sélectionnée
            >
              <option value="">Sélectionnez un modèle</option>
              {modeles.map((modele) => (
                <option key={modele} value={modele}>
                  {modele}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Kilométrage :</label>
            <input
              type="number"
              name="kilometrage"
              value={formData.kilometrage}
              onChange={handleFormChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Type de moteur :</label>
            <select
              name="typeMoteur"
              value={formData.typeMoteur}
              onChange={handleFormChange}
              required
            >
              <option value="essence">Essence</option>
              <option value="diesel">Diesel</option>
            </select>
          </div>

          <button type="submit">Trouver mon huile</button>
        </form>

        {recommendedHuile && (
          <div className="recommended-huile">
            <h3>Nous recommandons :</h3>
            <div className="huile-card">
              <img src={recommendedHuile.image} alt={recommendedHuile.title} />
              <h2>{recommendedHuile.title}</h2>
              <p>{recommendedHuile.description}</p>
              <p><strong>Kilométrage recommandé :</strong> {recommendedHuile.km}</p>
              <p><strong>Conseillé pour :</strong> {recommendedHuile.suitableFor}</p>
            </div>
          </div>
        )}
      </section>

      <section className="huiles-list">
        {huiles.map((huile) => (
          <div key={huile.id} className="huile-card" onClick={() => handleSelectHuile(huile)}>
            <img src={huile.image} alt={huile.title} />
            <h2>{huile.title}</h2>
            <p>{huile.description}</p>
          </div>
        ))}
      </section>

      {selectedHuile && (
        <section className="huile-detail">
          <h2>{selectedHuile.title}</h2>
          <img src={selectedHuile.image} alt={selectedHuile.title} />
          <p>{selectedHuile.description}</p>
          <p><strong>Kilométrage recommandé :</strong> {selectedHuile.km}</p>
          <p><strong>Conseillé pour :</strong> {selectedHuile.suitableFor}</p>
        </section>
      )}

      <FOOTER />
    </div>
  );
};

export default HuilePage;