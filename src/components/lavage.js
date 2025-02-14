import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import lavage1 from '../images/lavage int3.jpg';
import lavage2 from '../images/lavage int.jpg';
import lavage5 from '../images/lavage int2.jpg';
import lavage3 from '../images/lavage int1.jpg';
import lavage4 from '../images/lavage roue.jpg';
import lavage6 from '../images/auto lavage.jpg';
import Head from './BarreNavigation';
import FOOTER from './footer';



    
const Lavage_voiture = () => {
   
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [lavage1,lavage2, lavage5, lavage3, lavage4, lavage6];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 1500);
    
        return () => clearInterval(interval); // Fonction de nettoyage
    }, [images.length]);
    
    return (
        <div className="container my-5" style={{backgroundColor: '#f8f9fa'}}>
            <Head/>
            
          
   <br></br>
            {/* Section Carousel */}
            <div className='d-flex justify-content-center align-items-center'>

            <div className="position-relative carousel-container">
                <img 
                  src={images[currentImageIndex]}
                  alt={`Livraison ${currentImageIndex +1}`}
                  className='img-fluid rounded shadow mx-auto'
                  style={{ width:'700px',height:'400px', objectFit:'cover',transition:'opacity 1s ease-in-out'}}
                  />
                  <div className="carousel-overlay text-white">

                    </div>
                    
           <div className='d-flex justify-content-center align-items-center'>
                    <div className='text-center'>
                       <h4 className="text-primary fw-bold">Votre voiture mérite le meilleur soin !.</h4>
                       <p className="lead mb-4" style={{ color: '#555' }}>
                           Réservez un lavage aujourd'hui en un clic!</p>
                           <a href="tel:92519821" className='btn btn-primary btn-lg'>Reserver</a>
                           <section className='mt-5 text-center'>
                            <h2 className='text-primary fw-bold mb-4'>Nos Services</h2>
                       <ul className='list-unstyled'>
                <li className='mb-3'>
                   <i className='fas fa-car-alt text-primary me-2'></i>Lavage extérieur complet
                    </li>

                    <li className='mb-3'>
                   <i className='fas fa-car-alt text-primary me-2'></i>Lavage intérieur détaillé
                    </li>   

                    <li>
                   <i className='fas fa-car-alt text-primary me-2'></i>Self-service disponible 24/7
                    </li>   
            </ul>
            </section>
                  </div>
                   </div>
                 </div>
                    </div>

                    <section className="mt-5">
                <h2 className="text-primary fw-bold text-center mb-4">Pourquoi Nous Choisir pour le Lavage ?</h2>
                <div className="row g-4">
                    {[
                        { title: "Lavage Rapide", icon: "fas fa-stopwatch", text: "Gagnez du temps avec notre service efficace." },
                        { title: "Soin Professionnel", icon: "fas fa-tools", text: "Des experts pour un lavage de qualité." },
                        { title: "Prix Adorables", icon: "fas fa-wallet", text: "Des tarifs compétitifs pour tous nos clients."},
                        { title: "Equipements Modernes", icon: "fas fa-car", text: "Technologie avancée pour un nettoyage impeccable." },
                    ].map((item, index) => (
                        <div className="col-md-3 text-center" key={index}>
                            <i className={`${item.icon} fa-3x text-primary mb-3`}></i>
                            <h3 className="h5 fw-bold">{item.title}</h3>
                            <p className="text-muted">{item.text}</p>
                        </div>
                    ))}
                </div>
                </section>
                
<div>
    <footer>
        <FOOTER/>
    </footer>
</div>
     
   
  </div>

                


    );
};
export default Lavage_voiture;