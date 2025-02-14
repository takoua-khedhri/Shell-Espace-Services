import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Page_css.css';
import promoVideo from '../videos/promo.mp4';
import Head from './BarreNavigation';
import FOOTER from './footer';
import { motion } from 'framer-motion';  // Assure-toi que cette ligne est présente

const Apropos = () => {
  return (
    <div>
      <Head />
      <section className="hero bg-primary text-white text-center py-5 position-relative">
        <div className="overlay position-absolute top-0 left-0 w-100 h-100 bg-dark opacity-50"></div>
        <div className="container position-relative z-index-1">
          <br />
          <motion.h1 
            className="display-4 fw-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Bienvenue à Espace Sessi Services & Loisirs
          </motion.h1>
          <motion.p 
            className="lead mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Services de qualité, 24h/24 et 7j/7.
          </motion.p>
          <div className="mt-4">
            <video
              src={promoVideo}
              controls
              autoPlay
              loop
              muted
              className="rounded shadow-lg mb-4"
              style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }}
            />
            <motion.div 
              className="video-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              
            </motion.div>
          </div>
        </div>
      </section>

      {/* Localisation & Horaires Section */}
      <section className="container my-5">
        <div className="row">
          {/* Localisation */}
          <div className="col-md-6">
            <h2 className="text-center text-primary fw-bold mb-3">Localisation</h2>
            <div className="map-container shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434850984!2d-122.41941528468153!3d37.77492977975861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064c24a4e63%3A0xa6b4f4e4dbec57ad!2sShell!5e0!3m2!1sen!2sus!4v1630000000000"
                width="100%"
                height="350"
                allowFullScreen=""
                loading="lazy"
                title="localisation Shell"
                className="rounded"
                style={{ border: '0' }}
              ></iframe>
            </div>
          </div>

          {/* Horaires */}
          <div className="col-md-6">
            <h2 className="text-center text-primary fw-bold mb-3">Horaires</h2>
            <div className="card shadow-lg">
              <div className="card-body">
                <ul className="list-unstyled text-center">
                  {['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'].map((day, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2, duration: 0.5 }}
                    >
                      <strong>{day} : </strong>00:00 - 00:00
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bouton Découvrir nos Services */}
      <section className="text-center my-5">
        <Link 
          to="/Acceuil" 
          className="btn btn-lg btn-outline-primary fw-bold shadow-sm"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Découvrir Nos Services <i className="fas fa-arrow-right"></i>
        </Link>
      </section>
<br></br>
<br></br>
      {/* Footer */}
      <FOOTER />
    </div>
  );
};

export default Apropos;