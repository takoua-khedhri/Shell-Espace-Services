import React from 'react';
import { Link } from 'react-router-dom';
import autoLavage from '../images/auto lavage.jpg';
import vidangeImage from '../images/vifg.jpg';
import livraisonImage from '../images/livraison.png';
import huile from '../images/huile.jpg';
import controle from '../images/controle.jpg';
import carte from '../images/shell_card.jpg';
import Head from './BarreNavigation';
import FOOTER from './footer';

const Acceuil = () => {
  return (
    <div className="container my-5" style={{ backgroundColor: '#f8f9fa' }}>
      <Head />

      {/* Section Services */}
      <section className="mt-5">
        <br></br>
        <br></br>
        <h2 className="text-center mb-4" 
        style={{
          color: '#007bff',
          fontWeight: 'bold',
          fontSize: '2rem',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          letterSpacing: '1px',
          lineHeight: '1.5',
          margin: '20px 0',
          fontFamily: 'Arial, sans-serif',
        }

        }
        >Bienvenue chez  <span style={{color: '#FF5722'}}>Sessi Station </span>- Des Services Automobiles et Loisirs à Votre Portée</h2>
        <div className="row">
         
           {/* Liste des cartes */}
           {[
            {
              image: carte,
              title: 'Carte Shell',
              text: 'Obtenez des récompenses exclusives et économisez sur vos dépenses grâce à notre carte Shell.',
              link: '/Carteshell',
            },
            {
              image: huile,
              title: 'Huiles moteur pour voiture Shell Helix',
              text: 'Offrez à votre moteur la protection qu’il mérite avec nos lubrifiants haut de gamme.',
              link: '/Huile',
            },
            {
              image: controle,
              title: 'Services de contrôle automobile Shell',
              text: 'Assurez la sécurité de votre véhicule grâce à nos services de contrôle de qualité.',
              link: '/services/controle',
            },
            {
              image: vidangeImage,
              title: 'Service de Vidange Moteur Shell',
              text: 'Prolongez la vie de votre moteur avec nos services rapides et fiables de vidange.',
              link: '/vidange',
            },
            {
              image: autoLavage,
              title: 'Lavage Auto Premium Shell',
              text: 'Faites briller votre voiture avec nos options de lavage intérieur et extérieur.',
              link: '/lavage',
            },
            {
              image: livraisonImage,
              title: 'Services de Transport Fiables Shell',
              text: 'Transportez vos biens en toute sécurité avec nos services logistiques professionnels.',
              link: '/livraison',
            },
           ].map((service, index)=> (
            <div className='col-md-4 mb-4' key={index}>
              <div className='card shadow-sm h-100' style={{position:'relative',overflow:'hidden'}}>
                <img
                src={service.image}
                className='card-img-top'
                alt={service.title}
                style={{height:'400px'}}
                />
                {/*texte*/}
                <div
                style={{
                  position: 'absolute',
                  bottom: '0',
                  width: '100%',
                  backgroundColor: 'rgba(0,0,0,0.5)', //fond gris transparent
                  color: 'white',
                  padding: '20px',
                  textAlign: 'center',
                }}
                >
                  <h5 style={{ fontWeight: 'bold', marginBottom: '10px' }}>{service.title}</h5>
                  <p style={{margin: '0', fontSize: '15px'}}>{service.text}</p>
                  <Link 
              to={service.link}
               className='btn btn-primary mt-auto'
               style={{ fontWeight: 'bold'}}
               >
                En savoir plus <i className='fas fa-arrow-right'></i>
              </Link>

              </div>
             <div className='card-body d-flex felx-column'>
             
             </div>
            </div>
   
        </div>
           ))}
           </div>
      </section>
<br></br>
<br></br>
      {/* Footer */}
      <FOOTER />
    </div>
  );
};

export default Acceuil;
